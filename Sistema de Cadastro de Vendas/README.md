# Sistema de Cadastro de Vendas

Aplicação web simples para cadastro e visualização de vendas, desenvolvida com **HTML, CSS e JavaScript puro**.

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
- Exibição da data e hora no formato brasileiro (`pt-BR`)
- Remoção individual de vendas
- Mensagem de lista vazia quando não há registros

## 🧠 Regras de negócio atuais

- O desconto é fixo em **10%** (`DESCONTO = 0.1`)
- O valor final é calculado por:

```text
valorFinal = valor - (valor * 0.1)
```

- IDs são gerados de forma incremental durante a execução da página
- Os dados ficam apenas em memória (não há persistência em banco ou `localStorage`)

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## ▶️ Como executar o projeto

1. Faça o download ou clone este repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto
3. Abra o arquivo `index.html` no navegador

> Dica: você também pode usar a extensão **Live Server** no VS Code para rodar localmente.

## 📁 Estrutura do projeto

```text
.
├── index.html
├── script.js
└── style/
    └── style.css
```

## ✅ Validações implementadas

- Impede cadastro com nome vazio
- Impede cadastro com valor vazio
- Impede cadastro com valor inválido ou menor/igual a zero

## ⚠️ Limitações atuais

- Não salva os dados ao recarregar a página
- Não possui edição de vendas
- Não possui filtros, busca ou paginação

## 💡 Melhorias futuras sugeridas

- Persistência com `localStorage` ou banco de dados
- Edição de vendas cadastradas
- Filtros por vendedor e período
- Exportação de relatório (CSV/PDF)
- Dashboard com total de vendas e métricas

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática de lógica com JavaScript.
