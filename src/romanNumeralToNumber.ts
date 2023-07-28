const hash = [
  { letter: "I", number: 1 },
  { letter: "IV", number: 4 },
  { letter: "V", number: 5 },
  { letter: "X", number: 10 },
  { letter: "L", number: 50 },
  { letter: "C", number: 100 },
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
      romanNumSplitted.splice(i, 1);
    } else {
      romanNumFormatted.push(romanNumSplitted[i]);
    }
  }
  return romanNumFormatted;
};
