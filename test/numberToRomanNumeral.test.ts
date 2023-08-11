import { convertToRoman } from "../src/numberToRomanNumeral";

describe("convertToRoman()", () => {
  it("should return M", () => {
    //Arrange
    const number = 1000;

    //Act Assert
    expect(convertToRoman(number)).toBe("M");
  });
  it("should return a message", () => {
    //Arrange
    const number = 4000;
    const message =
      "\nThe range of Roman numeral are 3999, try a number lower then 4000.";

    //Act Assert
    expect(convertToRoman(number)).toBe(message);
  });
  it("should return a message", () => {
    //Arrange
    const number = 0;
    const message =
      "\nThere's no zero number in Roman numeral, try a number bigger then ZERO.";

    //Act Assert
    expect(convertToRoman(number)).toBe(message);
  });
});
