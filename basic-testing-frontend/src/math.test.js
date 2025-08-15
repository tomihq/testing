import { it, expect } from 'vitest'
import { add } from './math'

//BAD TEST. 
it('should summarize all number values in an array', () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6)
})

//This test follows the AAA pattern. Good test.
it('should summarize all number values in an array', () => {
    //Arrange
    const arr = [1, 2, 3];
    
    //Act
    const result = add(arr)

    //Assert
    const expectedResult = arr.reduce((prev, current) => prev+current, 0)
    expect(result).toBe(expectedResult)
})


it('should yield NaN if a least one invalid number is provided', () =>{
    const arr = [1, undefined, 'invalid'];
    const result = add(arr);
    expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', () =>{
    const numbers = ['1', '2'];
    const result = add(numbers);
    const expectedResult = numbers.reduce((pred, cur) => +pred + +cur, 0);
    expect(result).toBe(expectedResult)
})