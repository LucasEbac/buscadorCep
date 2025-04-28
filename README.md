Buscador de endereço 

Este projeto consiste em um sistema desenvolvido em Python que utiliza uma API para buscar CEPs. O objetivo do sistema é fornecer uma interface simples e eficiente para buscar informações de endereços a partir de CEPs.

Tecnologias Utilizadas
- Linguagem de programação: Python
- Biblioteca para requisições HTTP: requests
- API de CEP: API pública 

 Funcionalidades
- Buscar CEPs
- Retornar informações de endereços (logradouro, bairro, cidade, estado)

Arquitetura do Sistema
O sistema é composto por um único módulo que realiza requisições à API de CEP. A arquitetura é simples e direta, permitindo uma fácil manutenção e atualização.


Exemplo de Uso

cep = "01001-000"
resultado = buscar_cep(cep)
if resultado:
    print("Logradouro:", resultado["logradouro"])
    print("Bairro:", resultado["bairro"])
    print("Cidade:", resultado["cidade"])
    print("Estado:", resultado["estado"])
else:
    print("CEP não encontrado")

Conclusão

O sistema de busca de CEP desenvolvido em Python é uma ferramenta útil e eficiente para encontrar informações de endereços. A utilização da API de CEP permite uma busca rápida e precisa, tornando o sistema uma ótima opção para aplicações que necessitam de informações de localização.
