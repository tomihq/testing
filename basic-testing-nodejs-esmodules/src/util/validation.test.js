import {it, describe, expect} from "vitest"
import { validateStringNotEmpty, validateNumber } from "./validation"

describe("validateStringNotEmpty", () =>{
    it("should return undefined if string is not empty", () =>{
        const input = "a";
        const expectedResult = undefined;
        const result = validateStringNotEmpty(input);
        expect(result).toBe(expectedResult)
    })

    it("should throw an error if string is empty", () =>{
        const input = "";
        const resultFn = () =>{
                validateStringNotEmpty(input);
        }
        expect(resultFn).toThrow(/Invalid input/)
    })
})

describe("validateNumber", () =>{
    it("should return undefined if valid number is provided", () =>{
        const input = 1;
        const expectedResult = undefined;
        const result = validateNumber(input);
        expect(result).toBe(expectedResult)
    })

    it("should throw an error if input is not casteable to number", () =>{
        const input = "p";
        const input2 = NaN;
        const resultFn = () =>{
            validateNumber(input);
            validateNumber(input2);
        }
        expect(resultFn).toThrow(/Invalid number input/)
    })

    it('should return undefined if string casteable to number is provided', () =>{
        const input = "1";
        const expectedResult = undefined;
        const result = validateNumber(input);
        expect(result).toBe(expectedResult)
    })
})