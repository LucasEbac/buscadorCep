document.getElementById("buscarEnderecoBtn").addEventListener("click", function () {
    document.getElementById("limparBtn").addEventListener("click", limparCampos);
    let uf = document.getElementById("estadoBusca").value.trim();
    let cidade = document.getElementById("cidadeBusca").value.trim();
    let logradouro = document.getElementById("logradouroBusca").value.trim();
    


    if (!uf || !cidade || !logradouro) {
        alert("Preencha UF, cidade e logradouro.");
        return;
    }

    buscarEndereco(uf, cidade, logradouro);
});



function buscarEndereco(uf, cidade, logradouro) {
    let url = `https://viacep.com.br/ws/${encodeURIComponent(uf)}/${encodeURIComponent(cidade)}/${encodeURIComponent(logradouro)}/json/`;
    


    fetch(url)
        .then(response => response.json())
        .then(data => {
            let lista = document.getElementById("listaResultados");
            lista.innerHTML = ""; // limpa resultados anteriores

            if (!data || data.length === 0) {
                lista.innerHTML = "<li>Nenhum endereço encontrado.</li>";
                return;
            }

            data.forEach(endereco => {
                let item = document.createElement("li");

                item.textContent = ` ${endereco.logradouro} - ${endereco.bairro} - ${endereco.localidade}/${endereco.uf} - CEP: ${endereco.cep}
                `;

                // (Opcional) Clique para preencher campos automaticamente
                item.style.cursor = "pointer";
                item.addEventListener("click", () => preencherCampos(endereco));

                lista.appendChild(item);
            });
        })
        .catch(error => console.error("Erro na consulta:", error));
}

function preencherCampos(endereco) {
    document.getElementById("cep").value = endereco.cep;
    document.getElementById("logradouro").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
    
}
