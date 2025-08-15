export const getResultTextByResult = (result) =>{
  if (result === 'invalid') return 'Invalid input. You must enter valid numbers.'
  else if(result !== 'no-calc') return 'Result: ' + result

  return "";
}

export function outputResult(resultText){
  const output = document.getElementById('result');
  output.textContent = resultText;
}