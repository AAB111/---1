function isPalindrome(str) {
    const normalStr = str.toLowerCase().replaceAll(' ','');
    const reversedStr = normalStr.split('').reverse().join('');
    return normalStr === reversedStr;
}
function extractDigits(inputString) {
    let digits = inputString.match(/\d/g);  // Извлечение всех цифр от 0 до 9 из строки
    if (digits === null) {
        return NaN;  // Если цифр нет, возвращаем NaN
    } else {
        return parseInt(digits.join(''), 10);  // Преобразование массива цифр в целое положительное число
    }
}
function padString(originalString, targetLength, paddingString) {
    if (originalString.length >= targetLength) {
      return originalString;  // Если исходная строка уже достаточно длинная, возвращаем ее без изменений
    } else {
      let paddingLength = targetLength - originalString.length;
      let paddingRepetitions = Math.ceil(paddingLength / paddingString.length);
      let paddedString = paddingString.repeat(paddingRepetitions).slice(0, paddingLength) + originalString;
      return paddedString;
    }
}
function checkStringLength(str, maxLength) {
    return str.length <= maxLength;
}