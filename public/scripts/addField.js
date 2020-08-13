// Procurar o botão
document.querySelector("#add-time")

    // Quando clicar no botão
    .addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean true ou false

    // pegar os campor. Que campos ??  
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function (fieldDoMomento) {
        // pega o field do momento e limpa ele
        fieldDoMomento.value = ""
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

