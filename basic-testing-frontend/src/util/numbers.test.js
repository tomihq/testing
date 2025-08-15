import { it, expect } from "vitest";
import { transformToNumber } from './numbers'

it('should convert a string to number', () =>{
    const sr = "1";
    const expectedResult = 1; 
    const result = transformToNumber(sr);
    expect(result).toBe(expectedResult);
})

it('should return NaN if argument provided is not casteable', () =>{
    const sr = "p";
    const result = transformToNumber(sr);
    expect(result).toBeNaN();
})

it('should return NaN if no argument is provided', () =>{
    const resultFn = transformToNumber()
    expect(resultFn).toBeNaN();
})