//nested looping
//barisan bintang biasa
var stars = 5;
var stairs = 0;

while (stairs<stars){
	console.log('*')
	stairs++;
}

//barisan bintang dengan nested looping
var laps = 5;
var simple = 0;

while (laps<simple){
	console.log('*****')
	simple++;
}
//tangga bintang
var tool = 5;

var inject = 1;
var i = 0;

while (i<tool) {
  var pyramid = '*';
  var j=0;
  while (j<i) {
    pyramid = pyramid +'*';
    j++;
  }
  console.log(pyramid);
  i++;
}
