interface ICalcularIdade {
  nome: string,
  anoNascimento: number
  profissao?: string
}

function calcularIdade({
  nome,
  anoNascimento,
  profissao
}: ICalcularIdade): string {
  const idade: number = 2021 - anoNascimento
  
  if(profissao){
    return `Seu nome é ${nome}. Voce tem ${idade} anos e sua profissão é ${profissao}`
  }

  return `Seu nome é ${nome}. Voce tem ${idade} anos.`
}

const nome = 'Nathally'
const anoNascimento = 1990
const profissao = 'Desenvolvedora'

console.log(calcularIdade({nome, anoNascimento}))
console.log(calcularIdade({nome, anoNascimento, profissao}))
