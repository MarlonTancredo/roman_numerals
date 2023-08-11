import {
  convertToNumber,
  isLetterUpperCase,
  isValidNumber,
} from "./src/romanNumeralToNumber";
import { convertToRoman } from "./src/numberToRomanNumeral";

const printNumber = (letter: string) => {
  if (!isLetterUpperCase(letter)) {
    return "You must to enter a uppercase letter!";
  }
  if (isValidNumber(convertToNumber(letter))) {
    return "You must enter a valid Roman number!";
  }
  return `Convert to Number: ${convertToNumber(letter)}`;
};
console.log(printNumber("XXXIV"));

console.log("Convert to Roman numeral:", convertToRoman(1001));
