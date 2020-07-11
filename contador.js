const dataFutura = moment("2020-07-11")
const dataAtual = moment()


function contador() {

    let verificaValidadeData = moment(dataFutura).isSameOrBefore(dataAtual)
    
    if(verificaValidadeData) {
        atualizaValores([])
        return;
    }

    let diferencaDatasEmSegundos = dataFutura.diff(dataAtual, 'seconds')
    let diferencaDatasFormatada = moment.duration(diferencaDatasEmSegundos, "seconds").format("DD HH mm ss", { trim: false })
    
    let separaValores = diferencaDatasFormatada.split(' ')
    atualizaValores(separaValores)

}

function atualizaValores([dias = 0, horas = 0, minutos = 0, segundos = 0]) {
    console.log(dias, horas, minutos, segundos)
}

contador()

    