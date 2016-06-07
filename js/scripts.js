/* Word Puzzle */

$(function(){

var sentence = "Believe you can and you're halfway there. Theodore Roosevelt";
var vowels = ["a", "e", "i", "o", "u"];

console.log(sentence);
console.log(vowels);

var sentSplit = sentence.split("");
console.log(sentSplit);


var array_sentence_keys = new Array();
var array_sentence_values = new Array();
for (var key in sentSplit) {
  array_sentence_keys.push(key);
  array_sentence_values.push(sentSplit[key]);
}

var array_vowels_keys = new Array();
var array_vowels_values = new Array();
for (var key in vowels) {
  array_vowels_keys.push(key);
  array_vowels_values.push(vowels[key]);
}

console.log(array_sentence_keys);
console.log(array_sentence_values);
console.log(array_vowels_keys);
console.log(array_vowels_values);

for (var index = 0; index < sentSplit.length; index +=1){
  $("#puzzle").append(sentSplit[index]);
}



});
