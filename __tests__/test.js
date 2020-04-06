// GENERATE PHONE NUMBER

const generatePhoneNumber = require('../generatePhoneNumber')

describe('Generate a phone number from nums', () => {
  describe.each([
    [[3, 2, 1, 2, 3, 4, 5, 4, 5, 4], '321-234-5454'],
    [8885653421, '888-565-3421']
  ])('generatePhoneNumber()', (input, expected) => {
    test(`returns ${expected}`, () => {
      expect(generatePhoneNumber(input)).toBe(expected)
    })
  })
})
