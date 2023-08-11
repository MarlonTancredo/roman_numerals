type RomanType = {
  [key: string]: number;
};

const romanNumerals: RomanType = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export const convertToNumber = (letter: string) => {
  let result: number = 0;

  for (let i: number = 0; i < letter.length; i++) {
    romanNumerals[letter[i]] < romanNumerals[letter[i + 1]]
      ? (result -= romanNumerals[letter[i]])
      : (result += romanNumerals[letter[i]]);
  }
  console.log("Convert to number: ", result);
  return result;
};
