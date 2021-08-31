const { TestWatcher } = require('jest');
let {repeatMessage} = require('../source/index');

test('should be a message that repeats based on inputs', () => {


  // repeatMessage("test message", 3);
  expect("data to check is passed here").toBeTruthy();
  expect(null).not.toBeTruthy();
})

describe('repeatMessage functionality', () => {
  test("Repeat message is a function.", () => {
    expect(typeof(repeatMessage)).toBe("function");
  });

  test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'", () => {
    expect(repeatMessage("hello", 3)).toEqual
  })
});