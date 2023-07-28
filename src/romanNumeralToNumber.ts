import { hash } from "./hash";
import { splitRomanNum } from "./splitRomanNum";

export const romanNumeralToNumber = (romanNum: string): number => {
  const romanNumArr = splitRomanNum(romanNum.toUpperCase());
  const romanToNumber = romanNumArr.map((letter) => {
    const index = (element: { letter: string }) => element.letter === letter;
    return hash[hash.findIndex(index)].number;
  });
  return sumRomanToNumber(romanToNumber);
};

const sumRomanToNumber = (romanToNumber: number[]) => {
  const initialValue = 0;
  const sumWithInitial = romanToNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};
