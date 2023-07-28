import { hash } from "./hash";
import { splitRomanNum } from "./splitRomanNum";

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
