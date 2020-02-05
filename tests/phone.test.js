const createPhoneNumber = require('../phone')

describe('Create Phone Number from nums', () => {
  describe.each([
    [[3, 2, 1, 2, 3, 4, 5, 4, 5, 4], '321-234-5454'],
    [8885653421, '888-565-3421']
  ])('createPhoneNumber()', (input, expected) => {
    test(`returns ${expected}`, () => {
      expect(createPhoneNumber(input)).toBe(expected)
    })
  })
})
