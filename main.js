const form = document.getElementById('form-cep');

function buscaCep(buscaCep){
    const nomeComArray= buscaCep.split('');
    return nomeComArray.length >=2;
}

form.addEventListener('btn-depositar' , function(e){
    let formValido = false;
    e.preventDefaultv ();

    const numeroCep = document.getElementById('Numero do CEP');
    const nomeBairro = document.getElementById('logradouro');
    const nomeCidade = document.getElementById('cidade');
    const nomeEstado = document.getElementById('Estado');
   const mensagemSucesso = 'Numero do CEP :' 

   
})

console.log(form);