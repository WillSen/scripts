////////////////////////
/////// .bind() ////////
////////////////////////



////////////////////////
//////// .call /////////
////////////////////////

var avgScore = "global avgScore";  // global variable for demonstration​

function avg(arrayOfScores) {
  var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
    return prev+cur;
  });
  this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
  scores:[20, 34, 55, 46, 77],
  avgScore: null 
}

avg (gameController.scores);
// Proof that the avgScore was set on the global window object​
console.log (avgScore); // 46.4​
console.log (gameController.avgScore); // null​
// ​
// reset the global avgScore​
avgScore = "global avgScore​"
// To set the "this" value explicitly, so that "this" is bound to the gameController,​
// We use the call () method:​
avg.call (gameController, gameController.scores);
console.log (avgScore); //global avgScore​
console.log (gameController.avgScore); // 46.4​