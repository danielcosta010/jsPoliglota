export class Conta {

    constructor( {titular, banco, agencia, numero} ) {
      // this.titular = titular;
      // this.banco = banco;
      // this.agencia = agencia;
      // this.numero = numero;
      Object.assign(this, {titular, banco, agencia, numero})
    }
}