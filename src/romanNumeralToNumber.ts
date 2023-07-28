const hash = [
  { letter: "I", number: 1 },
  { letter: "IV", number: 4 },
  { letter: "V", number: 5 },
  { letter: "IX", number: 9 },
  { letter: "X", number: 10 },
  { letter: "XL", number: 40 },
  { letter: "L", number: 50 },
  { letter: "XC", number: 90 },
  { letter: "C", number: 100 },
  { letter: "CD", number: 400 },
  { letter: "D", number: 500 },
  { letter: "CM", number: 900 },
  { letter: "M", number: 1000 },
];

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
