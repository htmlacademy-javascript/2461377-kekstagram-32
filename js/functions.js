// Функция для проверки длины строки.

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

checkLength('Привет!', 5);

//Функция для проверки, является ли строка палиндромом.

function checkPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toUpperCase();
  let rts = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    rts += newStr[i];
  }
  return rts === newStr;
}

checkPalindrome('Патап');
