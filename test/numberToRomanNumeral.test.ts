import { convertToRoman } from "../src/numberToRomanNumeral";

describe("convertToRoman()", () => {
  it("should return M", () => {
    //Arrange Act Assert
    expect(convertToRoman(1000)).toBe("M");
  });
  it("should return a message", () => {
    //Arrange Act Assert
    expect(convertToRoman(4000)).toBe(
      "\nThe range of Roman numeral are 3999, try a number lower then 4000."
    );
  });
  it("should return a message", () => {
    //Arrange Act Assert
    expect(convertToRoman(0)).toBe(
      "\nThere's no zero number in Roman numeral, try a number bigger then ZERO."
    );
  });
});
