const vendas = [];
let proximoId = 1;
const DESCONTO = 0.1;

const vendaForm = document.getElementById('venda-form');
const vendedorInput = document.getElementById('vendedor');
const valorInput = document.getElementById('valor');
const vendasBody = document.getElementById('vendas-body');

function formatarMoeda(value) {
	return `R$ ${value.toFixed(2)}`;
}

function formatarDataHora(date) {
	return new Intl.DateTimeFormat('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	}).format(date);
}

function renderizarVendas() {
	vendasBody.innerHTML = '';

	if (vendas.length === 0) {
		const fileiraVazia = document.createElement('tr');
		fileiraVazia.innerHTML = '<td colspan="7">Nenhuma venda cadastrada</td>';
		vendasBody.appendChild(fileiraVazia);
		return;
	}

	vendas.forEach((venda) => {
		const fileira = document.createElement('tr');

		fileira.innerHTML = `
			<td>${venda.id}</td>
			<td>${venda.vendedor}</td>
			<td>${formatarMoeda(venda.valor)}</td>
			<td>${formatarMoeda(venda.desconto)}</td>
			<td>${formatarMoeda(venda.valorFinal)}</td>
			<td>${venda.dataCadastro}</td>
			<td>
				<button class="btn-remover" data-id="${venda.id}">Remover</button>
			</td>
		`;

		vendasBody.appendChild(fileira);
	});
}

function cadastrarVenda(event) {
	event.preventDefault();

	const vendedor = vendedorInput.value.trim();
	const valorRaw = valorInput.value.trim();

	if (!vendedor || !valorRaw) {
		alert('Preencha todos os campos antes de cadastrar.');
		if (!vendedor) {
			vendedorInput.focus();
			return;
		}

		valorInput.focus();
		return;
	}

	const valor = Number(valorInput.value);

	if (!vendedor) {
		alert('Informe o nome do vendedor.');
		vendedorInput.focus();
		return;
	}

	if (!Number.isFinite(valor) || valor <= 0) {
		alert('Informe um valor de venda válido.');
		valorInput.focus();
		return;
	}

	const desconto = valor * DESCONTO;
	const valorFinal = valor - desconto;

	const novaVenda = {
		id: proximoId++,
		vendedor,
		valor,
		desconto,
		valorFinal,
		dataCadastro: formatarDataHora(new Date())
	};

	vendas.push(novaVenda);
	renderizarVendas();

	vendaForm.reset();
	vendedorInput.focus();
}

function removerVenda(id) {
	const vendaIndex = vendas.findIndex((venda) => venda.id === id);

	if (vendaIndex === -1) {
		return;
	}

	vendas.splice(vendaIndex, 1);
	renderizarVendas();
}

function removerUltimaVenda() {
	if (vendas.length === 0) {
		alert('Não há vendas cadastradas para remover o último item.');
		return;
	}

	vendas.pop();
	renderizarVendas();
}

function limparTodasVendas() {
	if (vendas.length === 0) {
		alert('A lista já está vazia.');
		return;
	}

	vendas.length = 0;
	renderizarVendas();
}

vendaForm.addEventListener('submit', cadastrarVenda);

vendasBody.addEventListener('click', (event) => {
	const alvo = event.target;

	if (!alvo.classList.contains('btn-remover')) {
		return;
	}

	const id = Number(alvo.dataset.id);
	removerVenda(id);
});

renderizarVendas();
