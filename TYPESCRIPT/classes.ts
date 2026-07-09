/* --- Classes --- */
// protected: acessável somente pela classe original e as filhas;
// private: acessável somente pela classe original;
// public: acessável fora da classe, no escopo global;
// this: referência direta a classe;

class ContaBancaria {
  private readonly id: number;
  protected saldo: number;

  constructor(saldoInicial: number, id: number) {
    this.saldo = saldoInicial;
    this.id = id;
  }

  public depositar(valorDepositado: number): void {
    this.saldo += valorDepositado;
  }

  public consultarSaldo() {
    return this.saldo;
  }

  protected consultarId() {
    return this.id;
  }
}

class ContaBancariaPJ extends ContaBancaria {
  public consultarSaldoPJ(): number {
    console.log("ID:", this.consultarId());
    return this.saldo;
  }
}

const conta = new ContaBancariaPJ(100, 0o1);

console.log("SALDO: $", conta.consultarSaldo());
conta.depositar(150);
console.log("SALDO: $", conta.consultarSaldoPJ());
