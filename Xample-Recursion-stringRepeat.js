//Classical simple recursive function

function repeatStr (n, s) {
  if(n<2) return s;
  return s + repeatStr(n-1,s);
}

/*
Write a function called repeat_str which repeats the given string src exactly count times.

repeat_str(3, "foo"); // "foofoofoo"
repeat_str(1, "bar spam"); // "bar spam"
*/
