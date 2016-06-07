/* Word Puzzle */

// BUSINESS LOGIC FOR REGULAR EXPRESSION VERSION:
// function makePuzzle(sentence){
//   puzzle = sentence.replace(/([aeiou])/g, function (match) {
//       return match.replace(match, "-");
//   });
// }

// User Interface Logic:
$(function(){

var sentence = "Believe you can and you're halfway there. Theodore Roosevelt";
var letters = sentence.split("");

console.log(sentence);
console.log(letters);

// NON-REGULAR-EXPRESSION CODE FOR REPLACEMENT (need to make DRY)
letters.forEach(function(letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ){
    $("#puzzle").append("-");
  } else if (letter !== "a" || letter !== "e" || letter !== "i" || letter !== "o" || letter !== "u" ){
    $("#puzzle").append(letter);
  }
});

// FOR REGULAR EXPRESSION VERSION - SHOWS PUZZLE ON PAGE
// makePuzzle(sentence);
// $("#puzzle").text(puzzle);

});
