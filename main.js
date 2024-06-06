const { crawlPage } = require('./crawl.js')
const { makeReport } = require('./report.js')
const fs = require('fs')
const axios = require('axios');
const robotsParser = require('robots-parser');

async function fetchRobotsTxt(baseURL) {
   try {
      const response = await axios.get(new URL('/robots.txt', baseURL).href);
      return response.data;
   } catch (error) {
      console.error('Failed to fetch robots.txt:', error.message);
      return null;
   }
}

async function canCrawl(url, userAgent = '*') {
   let baseURL = ''
   try{
      baseURL = new URL(url).origin;
   } catch (err){
      console.log(`Error occured: ${err.message}`)
      process.exit(1)
   }
   const robotsTxt = await fetchRobotsTxt(baseURL);
   if (robotsTxt) {
      const robots = robotsParser(baseURL + '/robots.txt', robotsTxt);
      return robots.isAllowed(url, userAgent);
   }
   return true;
}

async function main(){
   if(process.argv.length < 3){
      console.log('No website provided')
      process.exit(1)
   }else if(process.argv.length < 3){
      console.log('Too many command line args')
      process.exit(1)
   }
   
   const baseURL = process.argv[2]
   if(!await canCrawl(baseURL)){
      console.log('Crawling not allowed on the given website, terminating program')
      process.exit(1)
   }
   if (!fs.existsSync('output')) {
      fs.mkdirSync('output');
   }
   console.log(`Starting crawl of ${baseURL}`)
   const pages = await crawlPage(baseURL, baseURL, {})
   makeReport(baseURL ,pages)
}

main()