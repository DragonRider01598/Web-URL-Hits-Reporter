const { JSDOM } = require('jsdom')
const fs = require('fs');
const errorLogFile = 'output/error_log.txt';
const nonHTMLFile = 'output/nonHTML_log.txt';

async function crawlPage(baseURL, currentURL, pages){
   const baseURLObj = new URL(baseURL)
   const currentURLObj = new URL(currentURL)
   if(baseURLObj.hostname != currentURLObj.hostname){
      return pages
   }

   const normalizedCurrentUrl = normalizeURL(currentURL)
   if(pages[normalizedCurrentUrl] > 0){
      pages[normalizedCurrentUrl]++
      return pages
   }
   pages[normalizedCurrentUrl] = 1

   console.log(`Actively crawling ${currentURL}`)

   try{
      const resp = await fetch(currentURL)

      if(resp.status > 399){
         logMessage(`Error in fecth with status code: ${resp.status}, on page: ${currentURL}`, errorLogFile)

         return pages
      }

      const contentType = resp.headers.get('content-type')

      if(!contentType.includes("text/html")){
         logMessage(`Non html response, content type: ${contentType}, on page: ${currentURL}`, nonHTMLFile)
         return pages
      }

      const htmlBody = await resp.text()

      const nextURLs = getURLsFromHTML(htmlBody, baseURL)

      for(const nextURL of nextURLs){
         pages = await crawlPage(baseURL, nextURL, pages)
      }

   }catch(err){
      logMessage(`Error in fetch : ${err.message}, on page ${currentURL}`, errorLogFile)
   }
   return pages
}

function logMessage(errorMessage, logFile){
   fs.appendFile(logFile, errorMessage + '\n', (appendErr) => {
      if (appendErr) {
         console.error(`Failed to write to log file: ${appendErr.message}`);
      }
   })
}

function getURLsFromHTML(htmlBody, baseURL){
   const urls = []
   const dom = new JSDOM(htmlBody)
   const linkElements = dom.window.document.querySelectorAll('a')

   linkElements.forEach(linkElement => {
      try {
         const urlObj = new URL(linkElement.href, baseURL);
         urls.push(urlObj.href);
     } catch (err) {
         logMessage(`Error with URL: ${err.message}, ${linkElement.href}`, errorLogFile);
     }
   })
   return urls
}


function normalizeURL(urlString){
   const urlObj = new URL(urlString)
   const hostPath = `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}`.toLowerCase()
   if ( hostPath.length > 0 && hostPath.slice(-1) === '/'){
      return hostPath.slice(0, -1)
   }
   return hostPath
}

module.exports = {
   normalizeURL,
   getURLsFromHTML,
   crawlPage,
   logMessage
}