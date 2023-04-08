function consultaEndereco(){
    let cep = document.querySelector('#cep').value
    if(cep.length !== 8){
        alert("Cep Invalido")
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data)
        })
        
    })
}

function mostrarEndereco(dados){
    let result = document.querySelector('#resultado');
    if (dados.erro){
        result.innerHTML = "Não foi possível localizar o endereço!"
    }else{

    result.innerHTML = `<p><strong>Logradouro:</strong> ${dados.logradouro}</p>
                            <p><strong>Complemento:</strong> ${dados.complemento}</p>
                            <p><strong>Bairro:</strong> ${dados.bairro}</p>
                            <p><strong>Cidade:</strong> ${dados.localidade}</p>
    `

}
}