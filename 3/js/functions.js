// Функция для проверки длины строки.

function checkLenght(str, maxLength) {
  return str <= maxLength;
}

checkLenght('Привет!', 22);

//Функция для проверки, является ли строка палиндромом.

function checkPalindrome(str) {
  const newStr = str.replaceALL(' ', '').toUpperCase;
  let rts = '';
  for (let i = newStr.lenght; i >= 0; i--) {
    rts += newStr[i];
  }
  return rts === newStr;
}

checkPalindrome('Патап');
