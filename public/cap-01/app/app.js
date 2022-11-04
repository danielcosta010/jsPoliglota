import { calculaImc } from "./oms.js";
import { Conta } from "./models/conta.js";

const imc = calculaImc({ peso: 68, altura: 1.68 });
const imc2 = calculaImc({ altura: 1.68, peso: 68 });
console.log(imc);
console.log(imc2);


const conta = new Conta ({
  titular: 'Daniel',
  banco: 'Danielcorp',
  agencia: '123',
  numero: '321'
})
console.log(conta);