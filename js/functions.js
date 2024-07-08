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

// Делу Время
/* Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true,
 если встреча не выходит за рамки рабочего дня, и false, если выходит.

// Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например,
 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

 Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
*/
/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
// */

function getMinutes(time) {
  const minutesArray = time.split(':');
  const minutes = minutesArray[0] * 60 + minutesArray[1] * 1;
  return minutes;
}

function checkTimeMeeting(workTimeStart, workTimeEnd, meetingTimeStart, meetingTimeLength) {
  const workMinutesStart = getMinutes(workTimeStart);
  const workMinutesEnd = getMinutes(workTimeEnd);
  const meetingMinutesStart = getMinutes(meetingTimeStart);

  if (meetingMinutesStart < workMinutesStart || meetingMinutesStart >= workMinutesEnd) {
    return false;
  } else if (workMinutesEnd < meetingMinutesStart + meetingTimeLength) {
    return false;
  }
  return true;
}

// eslint-disable-next-line no-console
console.log(checkTimeMeeting('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(checkTimeMeeting('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(checkTimeMeeting('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(checkTimeMeeting('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(checkTimeMeeting('8:00', '17:30', '08:00', 900)); // false
