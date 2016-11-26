/*
In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

Strings
Numbers
Regular Expressions
Functions named "Hello", "World", "HelloWorld" or anything similar.
Object keys named "Hello", "World", "HelloWorld" or anything similar.
Without using the above, output the string "Hello World!" to prove that there is always a way.
*/





var helloWorld = function () {
var one = +true
var two = one + one
var four = two + two
var eight = four + four
var sixteen = eight + eight
var thirtytwo = sixteen + sixteen
var sixtyfour = thirtytwo + thirtytwo
var sp = thirtytwo
var excl = thirtytwo + one
var H = sixtyfour + eight
var e = sixtyfour + thirtytwo + four + one
var l = sixtyfour + thirtytwo + eight + four
var o = sixtyfour + thirtytwo + sixteen - one
var W = sixtyfour + sixteen + eight - one
var r = sixtyfour + thirtytwo + sixteen + two
var d = sixtyfour + thirtytwo + four
return [H, e, l, l, o, sp, W, o, r, l, d, excl].map(function (c) { return String.fromCharCode(c) }).join([])
}

//--------------------------------------------------

var helloWorld = function () {
  return H()+e()+l()+l()+o()+sp()+W()+o()+r()+l()+d()+ex();
}

var n = { one:   [,].length,
          two:   [,,].length,
          three: [,,,].length,
          four:  [,,,,].length,
          five:  [,,,,,].length,
          six:   [,,,,,,].length,
          seven: [,,,,,,,].length,
          eight: [,,,,,,,,].length,
          nine:  [,,,,,,,,,].length,
          ten:   [,,,,,,,,,,].length };

var H =  function () { return String.fromCharCode(n.seven * n.ten + n.two); }
var e =  function () { return String.fromCharCode(n.ten * n.ten + n.one); }
var l =  function () { return String.fromCharCode(n.ten * n.ten + n.eight); }
var o =  function () { return String.fromCharCode(n.ten * n.ten + n.ten + n.one); }
var sp = function () { return String.fromCharCode(n.eight * n.four); }
var W =  function () { return String.fromCharCode(n.eight * n.ten + n.seven); }
var r =  function () { return String.fromCharCode(n.ten * (n.ten + n.one) + n.four); }
var d =  function () { return String.fromCharCode(n.ten * n.ten); }
var ex = function () { return String.fromCharCode(n.ten * n.three + n.three); }

//--------------------------------------------------


helloWorld()
