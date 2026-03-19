# Sistema de Cadastro de Vendas

Aplicação web simples para cadastro e visualização de vendas, desenvolvida com apenas **HTML, CSS e JavaScript**.

## 📋 Sobre o projeto

Este sistema permite registrar vendas informando o nome do vendedor e o valor da venda. Após o cadastro, cada venda é exibida em uma tabela com:

- ID da venda
- Nome do vendedor
- Valor bruto
- Desconto aplicado
- Valor final
- Data e hora do cadastro
- Ação para remoção

## 🚀 Funcionalidades

- Cadastro de vendas com validação de campos obrigatórios
- Validação de valor numérico maior que zero
- Aplicação automática de **10% de desconto** em cada venda
- Cálculo automático do valor final
- Exibição da data e hora
- Remoção individual de vendas
- Mensagem de lista vazia quando não há registros

## 🧠 Regras de negócio 

- O desconto é fixo em **10%** (`DESCONTO = 0.1`)
- O valor final é calculado por:

```text
valorFinal = valor - (valor * 0.1)
```

- IDs são gerados de forma incremental durante a execução da página
- Os dados ficam apenas em memória 

## ✅ Validações implementadas

- Impede cadastro com nome vazio
- Impede cadastro com valor vazio
- Impede cadastro com valor inválido ou menor/igual a zero

## 👨‍💻 Daniel Luiz

Projeto desenvolvido para fins de estudo e prática de lógica com JavaScript.
