import { memoiser } from "./infra/memoiser.js";

function somaDoisNumeros(num1, num2) {
  return num1 + num2;
}

const somaDoisNumerosM = memoiser(somaDoisNumeros);
console.log(somaDoisNumeros(5, 5));
console.log(somaDoisNumeros(10, 10));
console.log(somaDoisNumerosM(5, 5));