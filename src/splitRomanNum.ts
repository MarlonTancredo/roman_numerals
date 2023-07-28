//I will refactor this function in the future i promise! 😀

export const splitRomanNum = (romanNum: string): string[] => {
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
