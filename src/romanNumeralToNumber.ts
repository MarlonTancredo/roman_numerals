import { hashList } from "./hashList";

let romanNumeral = "";
let decimal = 0;
let numbers: number[] = [];

export const getRomanNumeralToUpperCase = (romanNum: string) => {
  romanNumeral = romanNum.toLocaleUpperCase();
  return romanNumeral;
};

export const printDecimalNumber = () => {
  pushDecimalsToNumbers();
  numbers.push(subtract());
  decimal = sumNumbers(numbers);
  return decimal;
};

const subtract = () => {
  let numberSub = 0;
  if (romanNumeral.includes("IV") || romanNumeral.includes("IX")) {
    numberSub = -2;
  } else if (romanNumeral.includes("XL") || romanNumeral.includes("XC")) {
    numberSub = -20;
  } else if (romanNumeral.includes("CD") || romanNumeral.includes("CM")) {
    numberSub = -200;
  }
  return numberSub;
};

const pushDecimalsToNumbers = () => {
  romanNumeral.split("").forEach((letter) => {
    numbers.push(romanNumeralToDecimal(letter));
  });
};

const romanNumeralToDecimal = (letter: string) => {
  const hashNumber = hashList.filter((obj) => {
    return obj.letter === letter;
  });
  return hashNumber[0].number;
};

const sumNumbers = (numbers: number[]) => {
  const initialValue = 0;
  return numbers.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    initialValue
  );
};
