const { normalizeURL } = require('./crawl.js')
const {test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
   const input = "htpps://blog.boot.dev/path"
   const actual = normalizeURL(input)
   const expected = "blog.boot.dev/path"
   expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
   const input = "htpps://blog.boot.dev/path/"
   const actual = normalizeURL(input)
   const expected = "blog.boot.dev/path"
   expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
   const input = "htpps://Blog.Boot.Dev/Path/"
   const actual = normalizeURL(input)
   const expected = "blog.boot.dev/path"
   expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
   const input = "htpp://blog.boot.dev/path"
   const actual = normalizeURL(input)
   const expected = "blog.boot.dev/path"
   expect(actual).toEqual(expected)
})