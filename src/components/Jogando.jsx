import styles from '../styles/Jogando.module.css'
import { useState } from "react"
import verdades from '../data/verdades'
import desafios from '../data/desafios'
import JogadorModel from '../model/jogador'

export default function Jogando(props) {

    // Altera o que deve ser exibido no index...
    const mudarTela = e => {
        e.stopPropagation()
        props.mudarTela(1)
    }
    
    // Cria um Array com os jogadores...
    function criarJogadores() { 
        const jogadores = []
        for (; jogadores.length < props.getQtdeJogadores; ) {
            jogadores.push(new JogadorModel(jogadores.length + 1, verdades, desafios))
        }
        return jogadores
    }

    // Futuramente pretendo criar uma forma de não repetir as verdades/desafios, por isso utilizei o useState para manter a lista de jogadores...
    const [getJogadores, setJogadores] = useState(criarJogadores())

    // Criei um useState para lidar com o jogador atual...
    const [getJogadorAtual, setJogadorAtual] = useState(getJogadores[0])

    // Vai mudando o jogador atual por ordem, puxando o jogador da lista de jogadores...
    function proximoJogador() {
        if (getJogadorAtual.jogador < props.getQtdeJogadores) {
            setJogadorAtual(getJogadores[getJogadorAtual.jogador])
        } else {
            setJogadorAtual(getJogadores[0])
        }
    }

    // Faz o jogador atual gerar uma verdade...
    const gerarVerdade = e => {
        e.stopPropagation()
        setJogadorAtual(getJogadorAtual.gerarVerdade())    
    }

    // Faz o jogador atual gerar um desafio...
    const gerarDesafio = e => {
        e.stopPropagation()
        setJogadorAtual(getJogadorAtual.gerarDesafio())
    }

    return (
        <div className={styles.jogando}>
            <button className={styles.botaoInicio} onClick={mudarTela}>Início</button>

            <h1 className={styles.textoJogadorAtual}>Jogador {getJogadorAtual.jogador}</h1>

            <span className={styles.textoVerdadeDesafio}>{getJogadorAtual.verdDesfAtual}</span>

            <div>
                <button className={styles.botaoVerdadeDesafio} onClick={gerarVerdade}>Verdade</button>
                <button className={styles.botaoVerdadeDesafio} onClick={gerarDesafio}>Desafio</button>
            </div>

            <button className={styles.botaoProximoJogador} onClick={proximoJogador}>Próximo Jogador</button>
        </div>
    )
}