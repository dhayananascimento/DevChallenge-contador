const data = document.getElementById("data")
const contagem = document.getElementById("contagem")

data.addEventListener("input", (e) => e.target.value = mascaraData(e.target.value))
contagem.addEventListener("click",(e) => {
    e.target.href='contador.html?data=' + data.value
})

function mascaraData(valor) {
    let  retorno =  valor
        .replace(/\D/g,'')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\/\d{4})\d+?$/,'$1')
    return retorno
}