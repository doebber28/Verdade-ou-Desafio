export default class JogadorModel {

    constructor(jogador, verdades, desafios, verdDesfAtual = 'Escolha VERDADE ou DESAFIO...') {
        this.jogador = jogador
        this.verdades = verdades
        this.desafios = desafios
        this.verdDesfAtual = verdDesfAtual
    }

    gerarVerdade() {
        const qtdeVerdades = this.verdades.length - 1
        const numeroDaVerdade = Math.floor(Math.random() * (qtdeVerdades - 0 + 1)) + 0
        const verdade = this.verdades[numeroDaVerdade]
        return new JogadorModel(this.jogador, this.verdades, this.desafios, verdade)
    }

    gerarDesafio() {
        const qtdeDesafios = this.desafios.length - 1
        const numeroDoDesafio = Math.floor(Math.random() * (qtdeDesafios - 0 + 1)) + 0
        const desafio = this.desafios[numeroDoDesafio]
        return new JogadorModel(this.jogador, this.verdades, this.desafios, desafio)
    }

}