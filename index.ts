import {
  convertToNumber,
  isLetterUpperCase,
  isValidNumber,
} from "./src/romanNumeralToNumber";
import { convertToRoman } from "./src/numberToRomanNumeral";

const messages = {
  upperCaseMessage: "You must to enter a uppercase letter!",
  validNumberMessage: "You must enter a valid Roman number!",
  finalMessage: "Convert to Number:",
};
const { upperCaseMessage, validNumberMessage, finalMessage } = messages;

const printNumber = (letter: string) => {
  if (!isLetterUpperCase(letter)) {
    throw new Error(upperCaseMessage);
  }
  if (isValidNumber(convertToNumber(letter))) {
    throw new Error(validNumberMessage);
  }
  console.log(`${finalMessage} ${convertToNumber(letter)}`);
};
printNumber("X");

console.log("Convert to Roman numeral:", convertToRoman(1));
