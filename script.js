//this is nested looping
//star stairs usual
var stars = 5;
var stairs = 0;

while (stairs<stars){
	console.log('^')
	stairs++;
}

//star stairs with nested looping
var laps = 5;
var simple = 0;

while (laps<simple){
	console.log('*****')
	simple++;
}

//star stairs
var tool = 5;

var inject = 1;
var i = 0;

while (i<tool) {
  var pyramid = '^';
  var j=0;
  while (j<i) {
    pyramid = pyramid +'^';
    j++;
  }
  console.log(pyramid);
  i++;
}
