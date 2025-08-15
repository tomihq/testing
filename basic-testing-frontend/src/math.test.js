import { it, expect } from 'vitest'
import { add } from './math'

//This test follows the AAA pattern.
it('should summarize all number values in an array', () => {
    //Arrange
    const arr = [1, 2, 3];
    const expectedResult = arr.reduce((prev, current) =>{prev+current}, 0)
    
    //Act
    const result = add(arr)

    //Assert
    expect(result).toBe(expectedResult)
})

