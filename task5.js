let city = prompt('Введите страну доставки')

let sum

switch ((city + '').toLocaleLowerCase()) {
  case 'китай':
    sum = 100;
    alert(`Доставка в ${city} будет стоить ${sum} кредитов`);

   case 'чили':
    sum = 250;
    alert(`Доставка в ${city} будет стоить ${sum} кредитов`)
    break;

   case 'австралия':
    sum = 170;
    alert(`Доставка в ${city} будет стоить ${sum} кредитов`)
    break;

   case 'индия':
    sum = 80;
    alert(`Доставка в ${city} будет стоить ${sum} кредитов`)
    break;

   case 'ямайка':
    sum = 120;
    alert(`Доставка в ${city} будет стоить ${sum} кредитов`)
    break;

  default:
    alert('В вашу страну нет доставки')
    break;
}