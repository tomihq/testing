import { calculateResult } from './src/math.js';
import { outputResult, getResultTextByResult} from './src/output.js'
import { extractEnteredNumberValues } from './src/parser.js'

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnteredNumberValues(form);
  const calculatedResult = calculateResult(numberInputs)
  const resultText = getResultTextByResult(calculatedResult)
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);

