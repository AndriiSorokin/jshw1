let credits = 23580;
let pricePerDroid = 3000;


const order = +prompt('Сколько вы хотите купить дроидов?')

if (order == 0) {
  alert('Отменено пользователем')

} else {
  let totalPrice = order * pricePerDroid
  totalPrice > credits ? alert('Недостаточно средств на счету!')
  : alert(`Вы купили ${order} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}