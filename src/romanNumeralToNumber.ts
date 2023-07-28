const hash = [
  { letter: "I", number: 1 },
  { letter: "IV", number: 4 },
  { letter: "V", number: 5 },
  { letter: "IX", number: 9 },
  { letter: "X", number: 10 },
  { letter: "LX", number: 40 },
  { letter: "L", number: 50 },
  { letter: "XC", number: 90 },
  { letter: "C", number: 100 },
  { letter: "CD", number: 400 },
  { letter: "D", number: 500 },
  { letter: "M", number: 1000 },
];

export const romanNumeralToNumber = (romanNum: string) => {
  const romanNumArr = splitRomanNum(romanNum);
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
    } else if (romanNumSplitted[i] === "I" && romanNumSplitted[i + 1] === "X") {
      romanNumFormatted.push("IX");
    } else if (romanNumSplitted[i] === "L" && romanNumSplitted[i + 1] === "X") {
      romanNumFormatted.push("LX");
    } else if (romanNumSplitted[i] === "X" && romanNumSplitted[i + 1] === "C") {
      romanNumFormatted.push("XC");
    } else if (romanNumSplitted[i] === "C" && romanNumSplitted[i + 1] === "D") {
      romanNumFormatted.push("CD");
    } else {
      romanNumFormatted.push(romanNumSplitted[i]);
    }
    romanNumSplitted.splice(i, 1);
  }
  return romanNumFormatted;
};
