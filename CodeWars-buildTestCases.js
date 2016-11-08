// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
  });
});

//-------------------------------------------


describe("binarySwap", _ => {
  it("should work for basic test cases", _ => {
    Test.assertEquals(binarySwap(0), 1);
    Test.assertEquals(binarySwap(1), 0);
    Test.assertEquals(binarySwap('0'), 1);
    Test.assertEquals(binarySwap('1'), 0);
  });
  it("should work for my custom test cases as well", _ => {
    // Feel free to add your own tests here :)
  });
});

//-------------------------------------------

/var a = { b: [42, { x: 9 }] };
Object.deepFreeze(a);

a.b = 42;
Test.assertSimilar(a.b, [42, { x: 9 }]);

a.b[1] = 42;
Test.assertSimilar(a.b[1], { x: 9 });


// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
