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


//Функция для проверки, является ли строка палиндромом с длинной строкой.

function checkBigPalindrome(input) {
  const newString = input.replaceAll(' ', '').toUpperCase();
  let reverse = '';
  let j = newString.length - 1;
  for (let i = 0; i <= newString.length - 1; i++) {
    if (newString[i] === newString[j]) {
      reverse += newString[j];
      j--;
    } else {
      break;
    }
  }
  return reverse === newString;
}

checkBigPalindrome('dfdf');
