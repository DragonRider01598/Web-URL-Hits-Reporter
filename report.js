const { logMessage } = require('./crawl.js')
const report = 'output/report.txt';

function sortPages(pages){
   const pagesArr = Object.entries(pages)
   pagesArr.sort((a,b) => b[1] - a[1]) 
   return pagesArr
}

async function makeReport(siteName, pages){
   let textReport = `Making report for ${siteName}\n`
   const sortedPages = sortPages(pages)
   for(const sortedPage of sortedPages){
      const url = sortedPage[0]
      const hits = sortedPage[1]
      textReport += `Hits: ${hits}, Link: ${url}\n`
   }
   textReport += `Program exited at ${new Date().toString()}\n`
   logMessage(textReport, report)
   console.log('\nReport created in output folder\nProgram Terminated')
}

module.exports = {
   sortPages,
   makeReport
}