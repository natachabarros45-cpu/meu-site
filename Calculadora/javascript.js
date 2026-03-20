class Calculadora {
  static #instancia = null; // guarda a única instância da classe | 👉 # = privado (ninguém fora da classe pode acessar)

  constructor() {
    if (Calculadora.#instancia) {
      return Calculadora.#instancia; // impede criar outra
    }

    this.historico = [];   // "historico" garante que o historico seja de um unico objecto e Guarda todas as operações (soma, subtracao, etc)
    Calculadora.#instancia = this;
  }

// 👉 Método oficial para acessar a instância | Boa prática em Singleton | Controla a criação
  static getInstance() {
    if (!Calculadora.#instancia) {
      Calculadora.#instancia = new Calculadora();
    }
    return Calculadora.#instancia;
  }

//Metodos ou accoes da calculadora;
  somar(a, b) {
    const resultado = a + b;                             // Calcula
    this.historico.push(`${a} + ${b} = ${resultado}`);  // Guarda no historico
    return resultado;
  }

  subtrair(a, b) {
    const resultado = a - b;
    this.historico.push(`${a} - ${b} = ${resultado}`);
    return resultado;
  }

  multiplicar(a, b) {
    const resultado = a * b;
    this.historico.push(`${a} * ${b} = ${resultado}`);
    return resultado;
  }

  dividir(a, b) {
    if (b === 0) {
      console.log("Erro: divisão por zero");
      return null;
    }
    const resultado = a / b;
    this.historico.push(`${a} / ${b} = ${resultado}`);
    return resultado;
  }

  imprimirHistorico() {
    console.log("Histórico:");
    this.historico.forEach(op => console.log(op)); // ".forEach" Percorre o array e imprime | Forma moderna de iterar
}
const calc1 = Calculadora.getInstance();
const calc2 = Calculadora.getInstance();

// Teste: deve ser TRUE (mesma instância)
console.log(calc1 === calc2);

calc1.somar(5, 3);
calc1.subtrair(10, 4);
calc2.multiplicar(2, 6);
calc1.dividir(20, 5);

calc1.imprimirHistorico();