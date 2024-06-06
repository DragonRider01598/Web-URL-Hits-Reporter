const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 2 pages', () => {
   const input = {
      'https://www.wagslane.dev': 1 ,
      'https://www.wagslane.dev/path': 3 
   }  
   const actual = sortPages(input)
   const expected = [
      ['https://www.wagslane.dev/path', 3 ],
      ['https://www.wagslane.dev', 1 ]
   ]
   expect(actual).toEqual(expected)
})


test('sortPages 2 pages', () => {
   const input = {
      'https://www.wagslane.dev/4': 1 ,
      'https://www.wagslane.dev/3': 7 ,
      'https://www.wagslane.dev/2': 3 ,
      'https://www.wagslane.dev/1': 2 ,
      'https://www.wagslane.dev/path': 3 
   }  
   const actual = sortPages(input)
   const expected = [
      ['https://www.wagslane.dev/3',7 ],
      ['https://www.wagslane.dev/2',3 ],
      ['https://www.wagslane.dev/path',3], 
      ['https://www.wagslane.dev/1',2 ],
      ['https://www.wagslane.dev/4',1 ]
   ]
   expect(actual).toEqual(expected)
})