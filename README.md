Buscador de endereço/CEPS

Este projeto consiste em um sistema desenvolvido em Python que utiliza uma API para buscar CEPs. O objetivo do sistema é fornecer uma interface simples e eficiente para buscar informações de endereços a partir de informações preenchidas pelo usuario, como logradouro, UF e cidade.

Tecnologias Utilizadas
- Linguagem de programação: Python
- Biblioteca para requisições HTTP: requests
- API de CEP: API pública 

 Funcionalidades
- Buscar CEPs
- Retornar informações de endereços (logradouro, bairro, cidade, estado)

Arquitetura do Sistema
O sistema é composto por um único módulo que realiza requisições à API de CEP. A arquitetura é simples e direta, permitindo uma fácil manutenção e atualização.


Preenchimento dos campos de busca

1️⃣ O usuário informa:

UF (ex: SP)

Cidade (ex: São Paulo)

Logradouro (ex: Avenida Paulista)

Esses dados são usados para buscar endereços semelhantes no ViaCEP.

2️⃣ Clique no botão “Buscar Endereço”

Quando o usuário clica no botão:

document.getElementById("buscarEnderecoBtn").addEventListener("click", function () {


O sistema:

Lê os valores digitados

Remove espaços extras (trim())

Verifica se todos os campos estão preenchidos

Se algum campo estiver vazio:

Exibe um alerta

A busca não é realizada

3️⃣ Montagem da URL da API ViaCEP

Se os dados estiverem corretos, o sistema monta esta URL:

https://viacep.com.br/ws/UF/CIDADE/LOGRADOURO/json/


Exemplo real:

https://viacep.com.br/ws/SP/Sao%20Paulo/Avenida%20Paulista/json/


A função encodeURIComponent():

Evita erros com acentos e espaços

Converte textos para o formato correto de URL

4️⃣ Consulta à API (fetch)

O JavaScript usa fetch() para acessar a API:

fetch(url)


Esse comando:

Faz uma requisição HTTP

Aguarda a resposta do servidor ViaCEP

Converte o retorno para JSON

5️⃣ Recebimento dos dados

O ViaCEP retorna um array de objetos, por exemplo:

[
  {
    "cep": "01311-000",
    "logradouro": "Avenida Paulista",
    "bairro": "Bela Vista",
    "localidade": "São Paulo",
    "uf": "SP"
  },
  ...
]


Cada objeto representa um endereço possível.

6️⃣ Exibição da lista de resultados

O sistema:

Limpa resultados antigos

Cria um <li> para cada endereço retornado

Mostra na tela informações completas:

Logradouro

Bairro

Cidade

Estado

CEP

data.forEach(endereco => {
    let item = document.createElement("li");


Assim, o usuário pode ver todas as opções disponíveis.

7️⃣ Clique em um endereço da lista

Cada item da lista é clicável.

Quando o usuário clica:

O sistema chama a função preencherCampos(endereco)

Os campos do formulário são preenchidos automaticamente com:

CEP

Logradouro

Bairro

Cidade

Estado

Isso evita digitação manual e reduz erros.

8️⃣ Exibição do botão “Limpar”

Após a primeira busca:

O botão Limpar aparece

Ele fica disponível para o usuário reiniciar o processo

9️⃣ Funcionamento do botão “Limpar”

Quando o botão é clicado:

function limparCampos() {


O sistema:

Apaga os campos de busca

Apaga os campos de endereço preenchidos

Remove a lista de resultados

Esconde o botão “Limpar” novamente

Ou seja, tudo volta ao estado inicial.

Conclusão

O sistema de busca de CEP desenvolvido em Python é uma ferramenta útil e eficiente para encontrar informações de endereços. A utilização da API de CEP permite uma busca rápida e precisa, tornando o sistema uma ótima opção para aplicações que necessitam de informações de localização.
