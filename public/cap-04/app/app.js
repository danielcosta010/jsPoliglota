import { memoiser } from "./infra/memoiser.js";

function somaDoisNumeros(num1, num2) {
  console.log('Entrou soma dois numeros');
  return num1 + num2;
}

const somaDoisNumerosM = memoiser(somaDoisNumeros);
console.log(somaDoisNumerosM(5, 5));
console.log(somaDoisNumerosM(10, 10));
console.log(somaDoisNumerosM(5, 5));

const fatorial =  memoiser(n => {
  if (n <= 1) return 1;
  return n * fatorial(--n);
});


const f1 = fatorial(4);
const f2 = fatorial(3);
const f3 = fatorial(2);
console.log(f1);
console.log(f2);
console.log(f3);

const fetchHandler = res => 
  res.ok ? res.json() : Promise.reject(res.statusText)

const getNotaFromId = id => 
  fetch(`http://localhost:3000/notas/${id}`)
    .then(fetchHandler);

const getNotaFromIdM = memoiser(getNotaFromId);

getNotaFromIdM(1)
  .then(console.log)
  .then(getNotaFromIdM.release())
  .then(getNotaFromIdM(1))
  .catch(e => console.log(e));