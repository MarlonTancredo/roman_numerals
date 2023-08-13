import {
  convertToNumber,
  isLetterUpperCase,
  isValidNumber,
} from "./src/romanNumeralToNumber";
import { convertToRoman, isOutRange, isZero } from "./src/numberToRomanNumeral";

const messages = {
  upperCaseMessage: "You must to enter a uppercase letter!",
  validNumberMessage: "You must enter a valid Roman number!",
  finalMessage: "Convert to Number:",
  outOfRange:
    "The range of Roman numeral are 3999, try a number lower then 4000.",
  zeroMessage:
    "There's no zero number in Roman numeral, try a number bigger then ZERO.",
};
const {
  upperCaseMessage,
  validNumberMessage,
  finalMessage,
  outOfRange,
  zeroMessage,
} = messages;

const printRomanNumeral = (letter: string) => {
  if (!isLetterUpperCase(letter)) {
    throw new Error(upperCaseMessage);
  }
  if (isValidNumber(convertToNumber(letter))) {
    throw new Error(validNumberMessage);
  }
  console.log(`${finalMessage} ${convertToNumber(letter)}`);
};

const printDecimal = (number: number) => {
  if (isOutRange(number)) {
    throw new Error(outOfRange);
  }

  if (isZero(number)) {
    throw new Error(zeroMessage);
  }

  console.log("Convert to Roman numeral:", convertToRoman(number));
};

printRomanNumeral("CXLIV");
printDecimal(144);
