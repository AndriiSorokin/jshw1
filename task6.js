let total = 0;

while (true) {
  let input = prompt("Введите любое число");

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}

alert(`Общая сумма ${total}`);