import { it, describe, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  it("should convert a string number to number of type number", () => {
    const input = "1";
    const result = transformToNumber(input);
    expect(result).toBeTypeOf("number");
  });

  it("should convert a string to number", () => {
    const input = "1";
    const expectedResult = 1;
    const result = transformToNumber(input);
    expect(result).toBe(expectedResult);
  });

  it("should return NaN if argument provided is not casteable", () => {
    const input = "p";
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });

  it("should return NaN if no argument is provided", () => {
    const resultFn = transformToNumber();
    expect(resultFn).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1', '2'];
        const cleanedNumbers = cleanNumbers(numberValues);
        const expectedResult = [1, 2]
        expect(cleanedNumbers).toEqual(expectedResult);
    })

    it('should throw an error if an array with at least one empty string is provided', () =>{
        const numberValues = ['', 1];
        const cleanedFn = () => cleanNumbers(numberValues);
        expect(cleanedFn).toThrow(/Invalid input/);
    })
});
