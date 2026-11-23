const form = document.getElementById("teste")
const saida = document.getElementById("resultado")

form.addEventListener('submit', function(evt){
    evt.preventDefault()
    let idade = Number(document.getElementById('idade').value)


    if(idade<=0){
        saida.textContent = 'Valor inválido'
        return 
    }
    const dias = 365 * idade
    saida.textContent = `Você viveu ${dias} dias`
})