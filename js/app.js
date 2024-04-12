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
//
// end of
//
// let frontEndBasic = [
//   student1 = {
//     name: "Amir hossein ardani",
//     classActivity: "C-",
//     handout: "C-",
//     exam: "C-",
//     overal: "C-",
//   },
//   student2 = {
//     name: "Arshia Zahedi",
//     classActivity: "B-",
//     handout: "B-",
//     exam: "C+",
//     overal: "B-",
//   },
//   student3 = {
//     name: "Amir Ali Zahedi",
//     classActivity: "B-",
//     handout: "C+",
//     exam: "C+",
//     overal: "C+",
//   },
//   student4 = {
//     name: "Taha Zanghaneh",
//     classActivity: "B+",
//     handout: "B+",
//     exam: "B+",
//     overal: "B+",
//   },
//   student5 = {
//     name: "Mahdi Zanghaneh",
//     classActivity: "B+",
//     handout: "B-",
//     exam: "B+",
//     overal: "B+",
//   },
//   student6 = {
//     name: "Pouya Fakhri",
//     classActivity: "A+",
//     handout: "B+",
//     exam: "A-",
//     overal: "A-",
//   },
// ];
// for(let i in frontEndBasic){
//   if(frontEndBasic[i].classActivity=='C-'){
//     console.log(frontEndBasic[i])
//   }
// }
//
// the end
//
// let moneyTipe = prompt('What do you want change to?(dolar,dinar,pond,yun,lir)');
// let moneyValue = Number(prompt('How much do you want to change?'));
// function moneyChenger(moneyTipe,moneyValue) {
//   let risult
//   switch(moneyTipe){
//     case 'dolar':
//       risult = moneyValue * 60000
//       break;
//
//     case 'dinar':
//       risult = moneyValue * 36000
//       break;
//
//     case 'pond':
//       risult = moneyValue * 40000
//       break;
//
//     case 'yun':
//       risult = moneyValue * 28000
//       break;
//
//     case 'lir':
//       risult = moneyValue * 8000
//       break;
//     default:
//       alert('Brother, I have explained what to write, why you are typing chert and pert')
//       break;
//
//     }
//     return(risult);
//   }

// console.log(moneyChenger(moneyTipe,moneyValue))

// the end

// let numbers =[2,3,8,9]

// function pluser(ary) {
//   let result = 0
//   for(let i in ary){
//     result += numbers[i]
//   }
//   let resultNumber = [result]
//   return(resultNumber)
// }
// console.log(pluser(numbers))

// the end

//start

// let body = document.querySelector(".body");
// let form = document.querySelector("#form");
// form.addEventListener("submit", (e) => {
//   let optionColor = e.target.color.value;
//   console.log(optionColor);
//   switch (true) {
//     case optionColor == "red":
//       body.classList.add("red");
//       break;
//     case optionColor == "blue":
//       body.classList.add("blue");
//       break;
//     case optionColor == "green":
//       body.classList.add("green");
//       break;
//   }
//   e.preventDefault();
// });

// the end

// start

const Objctlist = []
const form = document.querySelector("#form");
form.addEventListener('submit',(e)=>{
  const newObject = {
    objectName:e.target.name.value,
    objectBuy:e.target.buy.value,
  }
  
  Objctlist.push(newObject)
  console.log(Objctlist)
  e.target.buy.value = '';
  e.target.name.value = '';
  e.preventDefault()
})