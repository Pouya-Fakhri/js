// let num1 = Number(prompt('enter a number'))
// let operator = prompt('what hapens')
// let num2 = Number(prompt('enter a number'))
// let risult
// if(operator == '+'){
//     risult = num1 + num2
// }
// else if(operator == '-'){
//     risult = num1 - num2
// }
// else if(operator == '*'){
//     risult = num1 * num2
// }
// else if(operator == '/'){
//     risult = num1 / num2
// }
// else if(operator == '**'){
//     risult = num1 ** num2
// }
// alert(risult)
// end of
let grounScore = Number(prompt("put yor  groun score"));
let religionScore = Number(prompt("put yor  religion Score"));
let arabikScore = Number(prompt("put yor art arabik score"));
let englishScore = Number(prompt("put yor  english score"));
let scienceScore = Number(prompt("put yor  science score"));
let mathScore = Number(prompt("put yor  math score"));
let asportScore = Number(prompt("put yor  asport score"));
let artScore = Number(prompt("put yor art  score"));
let jubScore = Number(prompt("put yor  jub score"));
let all =
  jubScore +
  artScore +
  asportScore +
  mathScore +
  scienceScore +
  englishScore +
  arabikScore +
  religionScore +
  grounScore;
if (all > 180) {
  alert("fals");
} 
else{
  all / 9;
  let end = all
}
alert(end);
