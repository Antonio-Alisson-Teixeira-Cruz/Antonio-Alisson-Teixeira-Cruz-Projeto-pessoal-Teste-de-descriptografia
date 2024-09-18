let begin = prompt(`Bem vinda(o) ao teste de criptografia básica!
Cada acerto resultará em um ganho de ponto, cada erro tirará um ponto(cumulativo por questão, cuidado)
Deseja começar? (ex: Sim/Não)`)

while (begin != 'sim' && begin != 'não'){
  alert('Corriga sua resposta ')
  begin = prompt(`Bem vinda(o) aos testes de criptografia básica!
Cada acerto resultará em um ganho de ponto, cada erro tirará um ponto(cumulativo por questão, cuidado)
Deseja começar? (ex: Sim/Não)`)
}

if(begin == 'sim'){
let numberOfCorrectQuestions = 0

let question1 = 0 
do{
    question1 = prompt(`Decifre: romA
Letras minúsculas e sem acento)
Dica: .oirártnoc ao aieL`)
    if(question1 == 'amor'){
        alert('Certa, resposta!')
        numberOfCorrectQuestions++
    } else {
        alert('Errrrrrrrou!!')
        numberOfCorrectQuestions--
    }
} while (question1 != 'amor')

let question2 = 0

do{
    question2 = prompt(`Decifre: -.-. / .- / .-. / .-. / --- 
Letras minúsulas e sem acento
Dica: morse.`)

    if (question2 == 'carro'){
        alert('Certa reposta!')
        numberOfCorrectQuestions++
    } else {
        alert('Errrrrrrrou!!')
        numberOfCorrectQuestions--
    }

} while (question2 != 'carro')

let question3 = 0
if (question2 == 'carro'){
    do{
        question3 = prompt(`Decifre: Vsh, tbukv 
Letras minúsculas e sem acento
Dica: a = +7.`)

        switch(question3){
            case 'olá, mundo':
                alert('Sem acento, por favor')
                break
            case 'ola mundo':
                alert('Adicione vírgula por favor')
                break
            case 'olá mundo':
                alert('Sem acento e com vírgula, por favor')
                break
        }

        if(question3 == 'ola, mundo'){
            alert('certa resposta')
            numberOfCorrectQuestions++
        } else {
            alert('Errrrrrrrou!!')
            numberOfCorrectQuestions--
        }

    } while (question3 != 'ola, mundo')
}

let question4 = 0
do {
    question4 = prompt(`16,18,9,14,3,5,19,1
Letras minúsculas e sem acento
Dica: 4 = d 5 = e`)

        if (question4 == 'princesa'){
            alert('Certa resposta!')
            numberOfCorrectQuestions++
        } else {
            alert('Errrrrrrrou!!')
            numberOfCorrectQuestions--
        }
} while (question4 != 'princesa')

for(let i = 3; i >= 1; i--){
    alert(`Calculando pontuação: ${i}...`)
} 

if(numberOfCorrectQuestions >= 0 ){
    alert(`Pontuação: ${numberOfCorrectQuestions}/4`)
} else {
    alert('Pontuação: 0/0')
}
} else {
  alert('Encerrando teste...')
              }
