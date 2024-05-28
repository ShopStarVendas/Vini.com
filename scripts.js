// capturar valores
// armazenar valores de alguma forma
//  desenvolver funções que realizem os cálculos
// atualizar interface

// capturar valores
// caoturar campos de entrada de valores
// capturar valores dos campos
const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
}

const campoEntradaOrcamento = document.querySelector('.FormAddOrcamento input')
const buttonOrcamento = document.querySelector('.FormAddOrcamento button')

buttonOrcamento.addEventListener('click', capturarValorOrcamento)

function capturarValorOrcamento() {
    const valorOrcamento = Number(campoEntradaOrcamento.value)
    controleGastos.orcamento = valorOrcamento
    controleGastos.saldo = valorOrcamento
    atualizarInterface()
}

const campoNomeDespesa = document.querySelector('.FormAddDespesa_Nome')
const campoValorDespesa = document.querySelector('.FormAddDespesa_Valor')
const buttonDespesa = document.querySelector('.FormAddDespesa button')

buttonDespesa.addEventListener('click', capturarValorDespesa)

function capturarValorDespesa() {
    const nomeDespesa = campoNomeDespesa.value
    const valorDespesa = Number(campoValorDespesa.value)
    controleGastos.despesas += valorDespesa
    controleGastos.saldo -= valorDespesa
    atualizarInterface()
    adicionarDespesaInterface(nomeDespesa, valorDespesa)

}
const orcamento = document.querySelector('.secaoResultados_Orcamento p')
const despesas = document.querySelector('.secaoResultados_Despesas p')
const saldo = document.querySelector('.secaoResultados_Saldo p')

function atualizarInterface() {
    orcamento.innerText = `+R$ ${controleGastos.orcamento}`
    despesas.innerText = `- R$ ${controleGastos.despesas}`
    saldo.innerText = `R$ ${controleGastos.saldo}`
}
const listaDespesas = document.querySelector('.containerDespesas_lista')

function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const img = document.createElement('img')

    h3.innerText = nomeDespesa
    p.innerText = `R$ ${valorDespesa}`
    img.src = "./assets/img/lixo.png"
    img.alt = "lixeira"

    img.addEventListener('click', removerDespesa)
    li.dataset.valor = valorDespesa
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(img)
    listaDespesas.appendChild(li)
}

function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode
    const valorDespesaClicada = Number(despesaClicada.dataset.valor)
    controleGastos.despesas -= valorDespesaClicada
    controleGastos.saldo += valorDespesaClicada
    atualizarInterface()
    despesaClicada.remove()
}

/* jogo */
class Sprite{
	constructor(x, y, largura, altura){
		this.x = x
		this.y = y
		this.largura = largura
		this.altura = altura
	}

	desenha(xCanvas, yCanvas){
		ctx.drawImage(IMG, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
	}
}

const BACKGROUND = new Sprite(0, 0, 600, 600)
const PERSONAGEM = new Sprite(618, 16, 87, 87)

const PERDEU = new Sprite(603, 478, 397, 358)
const JOGAR = new Sprite(603, 127, 397, 347)
const NOVO = new Sprite(68, 721, 287, 93)
const RECORD = new Sprite(28, 879, 441, 95)
const CHAO = new Sprite(0, 604, 600, 54)

const REDOBS = new Sprite(662, 867, 50, 120)
const PINKOBS = new Sprite(719, 867, 50, 120)
const BLUEOBS = new Sprite(779, 867, 50, 120)
const GREENOBS = new Sprite(839, 867, 50, 120)
const YELLOWOBS = new Sprite(898, 867, 50, 120)