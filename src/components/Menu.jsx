import styles from '../styles/Menu.module.css'

export default function Menu(props) {
    
    // Altera o que deve ser exibido no index...
    const mudarTela = e => {
        e.stopPropagation()
        props.mudarTela(2)
    }

    // Aumentar a quantidade de jogadores no index...
    const aumentarJogadores = e => {
        e.stopPropagation()
        props.setQtdeJogadores(props.getQtdeJogadores + 1)
    }

    // Diminuir a quantidade de jogadores no index...
    const diminuirJogadores = e => {
        e.stopPropagation()
        props.getQtdeJogadores > 2 ? props.setQtdeJogadores(props.getQtdeJogadores - 1) : false
    }

    return (
        <div className={styles.menu}>
            <h1 className={styles.textoVerdadeDesafio}>Verdade ou Desafio</h1>
            <span className={styles.textoQtdeJogadores}>Quantas pessoas vão jogar?</span>
            <div className={styles.conteinerQtdeJogadores}>
                <button className={styles.botaoAjustarJogadores} onClick={diminuirJogadores}>-</button>
                <span className={styles.numeroQtdeJogadores}>{props.getQtdeJogadores}</span>
                <button className={styles.botaoAjustarJogadores} onClick={aumentarJogadores}>+</button>
            </div>
            <button className={styles.botaoJogar} onClick={mudarTela}>Jogar</button>
      </div>
    )
}