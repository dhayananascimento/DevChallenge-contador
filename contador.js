const elementoDias = document.querySelector('#dias span')
const elementoHoras = document.querySelector('#horas span')
const elementoMinutos = document.querySelector('#minutos span')
const elementoSegundos = document.querySelector('#segundos span')
const aviso = document.getElementById("aviso")

const dataURL   = window.location.search.replace("?", "").split("=")[1]
const dataFutura = dataURL ? moment(dataURL.split('/').reverse().join('-')) : moment()
const dataAtual = moment()


function contador() {
    let verificaValidadeData = moment(dataFutura).isSameOrBefore(dataAtual) || !dataFutura.isValid()
    
    if(verificaValidadeData) {
        atualizaValores([])
        aviso.style.display = "block"
        return
    }

    let diferencaDatasEmSegundos = dataFutura.diff(dataAtual, 'seconds')
    let diferencaDatasFormatada = moment.duration(diferencaDatasEmSegundos, "seconds").format("DD HH mm ss", { trim: false })
    
    let separaValores = diferencaDatasFormatada.split(' ')
    atualizaValores(separaValores)

}

function atualizaValores([dias = 0, horas = 0, minutos = 0, segundos = 0]) {
    elementoDias.textContent = dias
    elementoHoras.textContent = horas
    elementoMinutos.textContent = minutos
    elementoSegundos.textContent = segundos
}

contador()

    