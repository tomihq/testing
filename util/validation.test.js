import { it, expect} from 'vitest';
import { validateNotEmpty } from './validation.js';
it('should throw A title must be provided" as error if an empty string is provided', () =>{
    const testText = "";
    const testText2 = "          ";
    const resultFn = () =>{
        validateNotEmpty(testText, 'A title must be provided.');
    }
    const resultFn2 = () =>{
        validateNotEmpty(testText2, 'A title must be provided.');
    }
    expect(resultFn).toThrow(/A title must be provided./)
    expect(resultFn2).toThrow(/A title must be provided./)
})



it('should throw an error if an empty string is provided', () =>{
    const testText1 = "";
    const testText2 = "  ";

    const resultFn1 = () => validateNotEmpty(testText1, 'A title must be provided.');
    const resultFn2 = () => validateNotEmpty(testText2, 'A title must be provided.');
    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
})