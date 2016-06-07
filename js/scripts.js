/* Word Puzzle */


$(function(){

var sentence = "Ethical letterpress polaroid vinyl. Biodiesel twee iPhone shabby chic, wayfarers echo park dreamcatcher aesthetic. IPhone microdosing craft beer pug, shabby chic umami bushwick irony sriracha authentic chambray. Selvage health goth offal, blue bottle squid lo-fi knausgaard echo park literally bicycle rights brooklyn jean shorts actually.";
var vowels = ["a", "e", "i", "o", "u"];

console.log(sentence);
console.log(vowels);

/* Below is the regular expression of what needs to happen:
var fixed = sentence.replace(/e/g, "-").replace(/a/g, "-").replace(/i/g, "-").replace(/o/g, "-").replace(/u/g, "-");
*/

puzzle = sentence.replace(/([aeiou])/g, function (match) {
    return match.replace(match, "-");
});

$("#puzzle").text(puzzle);

// var letters = sentence.split("");
// console.log(letters);

// var array_sentence_keys = new Array();
// var array_sentence_values = new Array();
// for (var key in letters) {
//   array_sentence_keys.push(key);
//   array_sentence_values.push(letters[key]);
// }
//
// var array_vowels_keys = new Array();
// var array_vowels_values = new Array();
// for (var key in vowels) {
//   array_vowels_keys.push(key);
//   array_vowels_values.push(vowels[key]);
// }
//
// console.log(array_sentence_keys);
// console.log(array_sentence_values);
// console.log(array_vowels_keys);
// console.log(array_vowels_values);
//
//
// for (var index = 0; index < letters.length; index +=1){
//   $("#puzzle").append(letters[index]);
// }




});
