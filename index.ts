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
    console.log(upperCaseMessage);
  }
  if (isValidNumber(convertToNumber(letter))) {
    console.log(validNumberMessage);
  }
  console.log(`${finalMessage} ${convertToNumber(letter)}`);
};
printNumber("XXXIV");

console.log("Convert to Roman numeral:", convertToRoman(1321));
