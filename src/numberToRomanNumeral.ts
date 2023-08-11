type Romans = {
  [key: number]: string;
};

type RomanType = {
  singles: Romans;
  tens: Romans;
  hundreds: Romans;
  thousands: Romans;
};

const romans: RomanType = {
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

export const convertToRoman = (decimal: number) => {
  if (decimal > 3999) {
    return "The range of Roman numeral are 3999, try another number";
  }

  if (decimal === 0) {
    return "There's no zero number in Roman numeral, try another number";
  }

  const decimalToString = decimal.toString().split("");

  switch (decimalToString.length) {
    case 1:
      return romans.singles[parseInt(decimalToString[0])];
    case 2:
      return (
        romans.tens[parseInt(decimalToString[0])] +
        romans.singles[parseInt(decimalToString[1])]
      );
    case 3:
      return (
        romans.hundreds[parseInt(decimalToString[0])] +
        romans.tens[parseInt(decimalToString[1])] +
        romans.singles[parseInt(decimalToString[2])]
      );
    case 4:
      return (
        romans.thousands[parseInt(decimalToString[0])] +
        romans.hundreds[parseInt(decimalToString[1])] +
        romans.tens[parseInt(decimalToString[2])] +
        romans.singles[parseInt(decimalToString[3])]
      );
  }
};
