import { it, expect } from "vitest";
import { transformToNumber } from './numbers'

it('should convert a string number to number of type number', () =>{
    const input = "1";
    const result = transformToNumber(input);
    expect(result).toBeTypeOf('number');
})

it('should convert a string to number', () =>{
    const input = "1";
    const expectedResult = 1; 
    const result = transformToNumber(input);
    expect(result).toBe(expectedResult);
})

it('should return NaN if argument provided is not casteable', () =>{
    const input = "p";
    const input2 = {};
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
    expect(result).toBeNaN();
    expect(result2).toBeNaN()
})

it('should return NaN if no argument is provided', () =>{
    const resultFn = transformToNumber()
    expect(resultFn).toBeNaN();
})