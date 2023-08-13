import {
  convertToRoman,
  isOutRange,
  isZero,
} from "../src/numberToRomanNumeral";

describe("convertToRoman()", () => {
  it("should return M", () => {
    //Arrange
    const number = 1000;

    //Act Assert
    expect(convertToRoman(number)).toBe("M");
  });
  it("should return a true", () => {
    //Arrange
    const number = 4000;

    //Act Assert
    expect(isOutRange(number)).toBe(true);
  });
  it("should return a true", () => {
    //Arrange
    const number = 0;

    //Act Assert
    expect(isZero(number)).toBe(true);
  });
});
