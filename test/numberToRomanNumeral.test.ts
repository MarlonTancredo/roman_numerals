import { convertToRoman } from "../src/numberToRomanNumeral";

describe("convertToRoman()", () => {
  it("should return M", () => {
    //Arrange Act Assert
    expect(convertToRoman(1000)).toBe("M");
  });
  it("should return a message", () => {
    //Arrange Act Assert
    expect(convertToRoman(4000)).toBe(
      "The range of Roman numeral are 3999, try another number"
    );
  });
  it("should return a message", () => {
    //Arrange Act Assert
    expect(convertToRoman(0)).toBe(
      "There's no zero number in Roman numeral, try another number"
    );
  });
});
