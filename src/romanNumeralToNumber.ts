const hash = [
  { letter: "I", number: 1 },
  { letter: "V", number: 5 },
  { letter: "X", number: 10 },
  { letter: "L", number: 50 },
  { letter: "C", number: 100 },
  { letter: "D", number: 500 },
  { letter: "M", number: 1000 },
];

export const romanNumeralToNumber = (romanNum: string) => {
  const romanNumArr = romanNum.split("");
  const test = romanNumArr.map((letter) => {
    return hash[hash.findIndex((hashIndex) => hashIndex.letter === letter)]
      .number;
  });
  return sumConvertedNumbers(test);
};

const sumConvertedNumbers = (convertedNum: number[]) => {
  const initialValue = 0;
  const sumWithInitial = convertedNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
};
