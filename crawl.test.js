const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip trailing slash', () => {
   const input = "https://blog.boot.dev/path/"
   const actual = normalizeURL(input)
   const expected = "https://blog.boot.dev/path"
   expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
   const input = "https://Blog.Boot.Dev/Path/"
   const actual = normalizeURL(input)
   const expected = "https://blog.boot.dev/path"
   expect(actual).toEqual(expected)
})

test('getURLsFromHTML absolute', () => {
   const inputHTMLBody = `
   <html>
      <body>
         <a href="http://blog.boot.dev">
            Boot.dev Blog
         </a>
      </body>
   </html>
   `
   const inputBaseURL = "http://blog.boot.dev"
   const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
   const expected = ["http://blog.boot.dev/"]
   expect(actual).toEqual(expected)
})

test('getURLsFromHTML relative', () => {
   const inputHTMLBody = `
   <html>
      <body>
         <a href="/path/">
            Boot.dev Blog
         </a>
      </body>
   </html>
   `
   const inputBaseURL = "http://blog.boot.dev"
   const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
   const expected = ["http://blog.boot.dev/path/"]
   expect(actual).toEqual(expected)
})

test('getURLsFromHTML both', () => {
   const inputHTMLBody = `
   <html>
      <body>
         <a href="/path2/">
            Boot.dev Blog
         </a>
         <a href="http://blog.boot.dev/path1/">
            Boot.dev Blog
         </a>
      </body>
   </html>
   `
   const inputBaseURL = "http://blog.boot.dev"
   const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
   const expected = ["http://blog.boot.dev/path2/", "http://blog.boot.dev/path1/"]
   expect(actual).toEqual(expected)
})
