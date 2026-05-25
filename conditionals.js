let score = 75;
let PassingGrade = 60;

if (score === 100) {
  //== Can lead to confusing results, such as "" == 0 or false == 0 evaluating to true. Using === ensures that "" === 0 is false because a string is not a number.
  console.log("Passed - Perfect Score!");
  // Prints the text "Passed - Perfect Score!".
} else if (score >= PassingGrade) {
  console.log("Passed - Great Work!.");
} else {
  console.log("Failed - Better Luck Next Time.");
}
