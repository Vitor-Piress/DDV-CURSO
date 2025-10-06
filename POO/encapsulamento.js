class Cofre {
  #senha = "1234";
  #saldo = 0;

  #verificarSenha(senha) {
    return senha === this.#senha;
  }

  abrir(senha) {
    if (this.#verificarSenha(senha)) {
      console.log("Cofre aberto");
    } else {
      console.log("***Senha incorreta***");
    }
  }

  mostrarSaldo(senha) {
    if (this.#verificarSenha(senha)) {
      console.log(`O saldo atual é R$ ${this.#saldo}`);
    } else {
      console.log("***Senha incorreta***");
    }
  }

  depositar(senha, valor) {
    if (this.#verificarSenha(senha)) {
      this.#saldo += valor;
      console.log(`Foi depositado R$ ${valor}, saldo atual R$ ${this.#saldo}`);
    } else {
      console.log("***Senha incorreta***");
    }
  }

  sacar(senha, valor) {
    if (this.#verificarSenha(senha)) {
      if (valor <= this.#saldo) {
        this.#saldo - +valor;
        console.log(`Foi sacado R$ ${valor}, saldo atual R$ ${this.#saldo}`);
      } else {
        console.log("Saldo Insuficiente");
      }
    } else {
      console.log("***Senha incorreta***");
    }
  }
}

const meuCofre = new Cofre();

// console.log(meuCofre.#saldo);
// console.log(meuCofre.#senha);

meuCofre.abrir("123123123");
meuCofre.abrir("1234");

meuCofre.mostrarSaldo("1234");
meuCofre.depositar("1234", 500);
meuCofre.sacar("1234", 120);
meuCofre.depositar("1234124", 100);
meuCofre.mostrarSaldo("1234");
meuCofre.sacar("1234", 1000);
meuCofre.mostrarSaldo("1234");
