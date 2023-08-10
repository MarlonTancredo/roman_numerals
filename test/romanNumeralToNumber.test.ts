import { getRomanNumeralToUpperCase } from "../src/romanTonumber";

describe("getRomanNumeralToUpperCase()", () => {
  test("should return any string to upperCase ", () => {
    //Arrange
    const romanNumeral = "i";
    expect(getRomanNumeralToUpperCase(romanNumeral)).toBe("I");
  });
});
