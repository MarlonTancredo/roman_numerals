import { romanNumeralToNumber } from "../src/romanNumeralToNumber";

describe("Converting normal cases to normal number.", () => {
  test("should return a number 1", () => {
    const romanNumeral = "I";
    expect(romanNumeralToNumber(romanNumeral)).toBe(1);
  });
  test("should return a number 5", () => {
    const romanNumeral = "V";
    expect(romanNumeralToNumber(romanNumeral)).toBe(5);
  });
  test("should return a number 10", () => {
    const romanNumeral = "X";
    expect(romanNumeralToNumber(romanNumeral)).toBe(10);
  });
  test("should return a number 50", () => {
    const romanNumeral = "L";
    expect(romanNumeralToNumber(romanNumeral)).toBe(50);
  });
  test("should return a number 100", () => {
    const romanNumeral = "C";
    expect(romanNumeralToNumber(romanNumeral)).toBe(100);
  });
  test("should return a number 500", () => {
    const romanNumeral = "D";
    expect(romanNumeralToNumber(romanNumeral)).toBe(500);
  });
  test("should return a number 1000", () => {
    const romanNumeral = "M";
    expect(romanNumeralToNumber(romanNumeral)).toBe(1000);
  });
});

describe("Converting specific cases to normal number.", () => {
  test("should return a number 3", () => {
    const romanNumeral = "III";
    expect(romanNumeralToNumber(romanNumeral)).toBe(3);
  });
  test("should return a number 4", () => {
    const romanNumeral = "IV";
    expect(romanNumeralToNumber(romanNumeral)).toBe(4);
  });
  test("should return a number 9", () => {
    const romanNumeral = "IX";
    expect(romanNumeralToNumber(romanNumeral)).toBe(9);
  });
  test("should return a number 40", () => {
    const romanNumeral = "XL";
    expect(romanNumeralToNumber(romanNumeral)).toBe(40);
  });
  test("should return a number 90", () => {
    const romanNumeral = "XC";
    expect(romanNumeralToNumber(romanNumeral)).toBe(90);
  });
  test("should return a number 400", () => {
    const romanNumeral = "CD";
    expect(romanNumeralToNumber(romanNumeral)).toBe(400);
  });
  test("should return a number 900", () => {
    const romanNumeral = "CM";
    expect(romanNumeralToNumber(romanNumeral)).toBe(900);
  });
});

describe("Verifying the input is toUppercase.", () => {
  test("Should return a number 1", () => {
    const romanNumeral = "i";
    expect(romanNumeralToNumber(romanNumeral)).toBe(1);
  });
});
