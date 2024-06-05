function normalizeURL(urlString){
   const urlObj = new URL(urlString)
   const hostPath = `${urlObj.host}${urlObj.pathname}`.toLowerCase()
   if ( hostPath.length > 0 && hostPath.slice(-1) === '/'){
      return hostPath.slice(0, -1)
   }
   return hostPath
}

module.exports = {
   normalizeURL
}