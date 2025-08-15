import { validateInput } from "./validation.js";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numbersValues){
  const numbers = [];
   for (const numberInput of numbersValues) {
        validateInput(numberInput)
        numbers.push(numberInput);
      }
  return numbers;
}