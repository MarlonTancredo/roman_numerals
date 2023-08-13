type RomanKeys = {
  [key: number]: string;
};

type Numerals = {
  singles: RomanKeys;
  tens: RomanKeys;
  hundreds: RomanKeys;
  thousands: RomanKeys;
};

const numerals: Numerals = {
  singles: {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  },
  tens: {
    0: "",
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
  },
  hundreds: {
    0: "",
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCC",
    9: "CM",
  },
  thousands: { 1: "M", 2: "MM", 3: "MMM" },
};
const { singles, tens, hundreds, thousands } = numerals;

export const convertToRoman = (decimal: number) => {
  const decimalToString = decimal.toString().split("");

  switch (decimalToString.length) {
    case 1:
      return singles[parseInt(decimalToString[0])];
    case 2:
      return (
        tens[parseInt(decimalToString[0])] +
        singles[parseInt(decimalToString[1])]
      );
    case 3:
      return (
        hundreds[parseInt(decimalToString[0])] +
        tens[parseInt(decimalToString[1])] +
        singles[parseInt(decimalToString[2])]
      );
    case 4:
      return (
        thousands[parseInt(decimalToString[0])] +
        hundreds[parseInt(decimalToString[1])] +
        tens[parseInt(decimalToString[2])] +
        singles[parseInt(decimalToString[3])]
      );
  }
};

export const isOutRange = (decimal: number) => decimal > 3999;

export const isZero = (decimal: number) => decimal === 0;
