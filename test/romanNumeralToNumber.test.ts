import {
  convertToNumber,
  isValidNumber,
  isLetterUpperCase,
} from "../src/romanNumeralToNumber";

describe("convertToNumber()", () => {
  it("should return 24", () => {
    //Arrange
    const romanNumeral = "XXIV";

    //Act Assert
    expect(convertToNumber(romanNumeral)).toBe(24);
  });
  it("should return true", () => {
    //Arrange Act Assert
    expect(isValidNumber(NaN)).toBe(true);
  });
  it("should return false", () => {
    //Arrange
    const romanNumeral = "i";

    //Act Assert
    expect(isLetterUpperCase(romanNumeral)).toBe(false);
  });
});
