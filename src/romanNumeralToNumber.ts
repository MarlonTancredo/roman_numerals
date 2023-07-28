import { hash } from "./hash";

export const romanNumeralToNumber = (romanNum: string): number => {
  const romanNumArr = splitRomanNum(romanNum.toUpperCase());
  const romanToNumber = romanNumArr.map((letter) => {
    const index = (element: { letter: string }) => element.letter === letter;
    return hash[hash.findIndex(index)].number;
  });
  return sumConvertedNumbers(romanToNumber);
};

const sumConvertedNumbers = (convertedNum: number[]) => {
  const initialValue = 0;
  const sumWithInitial = convertedNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};

const splitRomanNum = (romanNum: string): string[] => {
  const romanNumFormatted: string[] = [];
  const romanNumSplitted = romanNum.split("");

  for (let i = 0; i < romanNumSplitted.length; i++) {
    if (romanNumSplitted[i] === "I" && romanNumSplitted[i + 1] === "V") {
      romanNumFormatted.push("IV");
      romanNumSplitted.splice(i, 1);
    } else if (romanNumSplitted[i] === "I" && romanNumSplitted[i + 1] === "X") {
      romanNumFormatted.push("IX");
      romanNumSplitted.splice(i, 1);
    } else if (romanNumSplitted[i] === "X" && romanNumSplitted[i + 1] === "L") {
      romanNumFormatted.push("XL");
      romanNumSplitted.splice(i, 1);
    } else if (romanNumSplitted[i] === "X" && romanNumSplitted[i + 1] === "C") {
      romanNumFormatted.push("XC");
      romanNumSplitted.splice(i, 1);
    } else if (romanNumSplitted[i] === "C" && romanNumSplitted[i + 1] === "D") {
      romanNumFormatted.push("CD");
      romanNumSplitted.splice(i, 1);
    } else if (romanNumSplitted[i] === "C" && romanNumSplitted[i + 1] === "M") {
      romanNumFormatted.push("CM");
      romanNumSplitted.splice(i, 1);
    } else {
      romanNumFormatted.push(romanNumSplitted[i]);
    }
  }
  return romanNumFormatted;
};
