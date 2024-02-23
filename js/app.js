let num1 = Number(prompt('enter a number'))
let operator = prompt('what hapens')
let num2 = Number(prompt('enter a number'))
let risult
if(operator == '+'){
    risult = num1 + num2
}
else if(operator == '-'){
    risult = num1 - num2
}
else if(operator == '*'){
    risult = num1 * num2
}
else if(operator == '/'){
    risult = num1 / num2
}
else if(operator == '**'){
    risult = num1 ** num2
}
alert(risult)
