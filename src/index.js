module.exports = function solveEquation(equation) {
  let arrayElements = equation.split(' ');
  function isNumber(element){
    if (!isNaN(+element)){
      return true;
    }
  };
  function toNumber(element){
    return + element;
  }
  let arrayCoefficients = arrayElements.filter(isNumber);
  let arr = arrayCoefficients.map(toNumber);
  if(arrayElements[3] === "-"){
    arr[1]*=-1;
  }
  if(arrayElements[7] === "-"){
    arr[2]*=-1;
  }
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  const x1 = Math.round((-b + Math.sqrt(b*b - 4*a*c))/(2*a));
  const x2 = Math.round((-b - Math.sqrt(b*b - 4*a*c))/(2*a));
  const solution = [];
  if(x2>x1){
    solution.push(x1);
    solution.push(x2); 
  } else {
    solution.push(x2);
    solution.push(x1); 
  }
  return solution;
}