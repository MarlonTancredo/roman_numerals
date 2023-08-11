import { convertToNumber } from "../src/romanNumeralToNumber";

describe("convertToNumber()", () => {
  it("should return 24 ", () => {
    //Arrange
    const romanNumeral = "XXIV";

    //Act Assert
    expect(convertToNumber(romanNumeral)).toBe(24);
  });
});
