interface IConta {
  nomeTitular: string;
  saldo?: number
}

class Conta {
  private nomeTitular: string
  private saldo: number
  private ativa: boolean = true
  
  constructor({
    nomeTitular,
    saldo = 0
  }: IConta){
    this.nomeTitular = nomeTitular,
    this.saldo = saldo
    console.log(`${this.nomeTitular}, bem vindo ao DIO Bank`)
  }

  meuSaldo = (): number => this.saldo

  depositar = (valor: number): void | boolean => {
    if(!this.ativa){
      console.log('Conta desativada, impossível realizar depósito')
      return this.ativa
    }
    this.saldo += valor
    console.log(`Você depositou ${valor}. Seu novo saldo é ${this.saldo}`)
  }

  sacar = (valor: number): boolean => {
    if(!this.ativa){
      console.log('Conta desativa, impossível realizar saque')
      return this.ativa
    }

    if(valor <= this.saldo){
      this.saldo -= valor
      console.log(`Você sacou ${valor}. Seu novo saldo é ${this.saldo}`)
      return this.ativa
    }

    console.log(`Saldo insuficiente. Você quer sacar ${valor}. Seu saldo atual é ${this.saldo}`)
    return this.ativa
  }

  cancelarConta = () => {
    if(this.saldo === 0){
      this.ativa = false
      console.log('Conta desativada')
      return this.ativa
    }

    console.log(`Impssível desativar conta de ${this.nomeTitular}. Conta com pendência!`)
  }
}

const conta: Conta = new Conta({nomeTitular: 'Nath'})

conta.cancelarConta()

conta.depositar(10)

//Vamos criar o DioBank
//Como realizar transferencia entre contas
