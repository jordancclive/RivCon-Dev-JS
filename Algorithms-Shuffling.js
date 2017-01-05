/*
----------------------------------------------------------------------------

                          Shuffling Algorithms

----------------------------------------------------------------------------

See:  https://bost.ocks.org/mike/shuffle/

      https://bost.ocks.org/mike/shuffle/compare.html

      

----------------------------------------------------------------------------
*/
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

//randomizes the original array in-place.
