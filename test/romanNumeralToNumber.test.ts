import {
  getRomanNumeralToUpperCase,
  printDecimalNumber,
} from "../src/romanNumeralToNumber";

describe("getRomanNumeralToUpperCase()", () => {
  it("should return any string to upperCase ", () => {
    //Arrange
    const romanNumeral = "i";

    //Act Assert
    expect(getRomanNumeralToUpperCase(romanNumeral)).toBe("I");
  });
});

describe("printDecimalNumber()", () => {
  it("should return 4 ", () => {
    //Arrange
    const romanNumeral = "xxiv";

    //Act
    getRomanNumeralToUpperCase(romanNumeral);

    //Assert
    expect(printDecimalNumber()).toBe(24);
  });
});
