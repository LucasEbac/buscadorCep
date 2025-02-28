document.getElementById("buscarCepBtn").addEventListener("click", function () {
    let cep = document.getElementById("cep").value.replace(/\D/g, ""); // Remove caracteres não numéricos

    if (cep.length === 8) {
        buscarCEP(cep);
    } else {
        alert("Por favor, digite um CEP válido.");
    }
});

function buscarCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }

            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        })
        .catch(error => console.error("Erro na consulta:", error));
}