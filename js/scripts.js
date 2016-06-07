/* Word Puzzle */

// Business Logic:
function makePuzzle(sentence){
  puzzle = sentence.replace(/([aeiou])/g, function (match) {
      return match.replace(match, "-");
  });
}

// User Interface Logic:
$(function(){

var sentence = "Ethical letterpress polaroid vinyl. Biodiesel twee iPhone shabby chic, wayfarers echo park dreamcatcher aesthetic. IPhone microdosing craft beer pug, shabby chic umami bushwick irony sriracha authentic chambray. Selvage health goth offal, blue bottle squid lo-fi knausgaard echo park literally bicycle rights brooklyn jean shorts actually.";
var vowels = ["a", "e", "i", "o", "u"];

console.log(sentence);
console.log(vowels);

/* Below is the regular expression of what needs to happen:
var fixed = sentence.replace(/e/g, "-").replace(/a/g, "-").replace(/i/g, "-").replace(/o/g, "-").replace(/u/g, "-");
*/

makePuzzle(sentence);
$("#puzzle").text(puzzle);

});
