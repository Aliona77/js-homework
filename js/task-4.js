let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;


let userInput = prompt('Укажыте количество дроидов!');

if (userInput === null || userInput != Number(userInput) || Number(userInput) === 0) {
  alert('Отменено пользователем!')
}
else {
  totalPrice = userInput * pricePerDroid;
  if (totalPrice > credits) {
    alert ('Недостаточно средств на счету!')
  } else {
    credits -= totalPrice;
    alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits} кредитов.`)
  }
}
