import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/menu'
import Jogando from '../components/Jogando'

export default function Home() {

  // Guarda a quantidade de jogadores. Esse dado é usado pelos componentes Jogando e Menu...
  const [getQtdeJogadores, setQtdeJogadores] = useState(2)
  
  // Salva a tela atual que é exibida (sendo 1 Menu, 2 Jogando)...
  const [getTela, setTela] = useState(1)

  // Renderiza a tela atual condicionalmente...
  function renderizarTela() { 
    if (getTela == 1) {
      return <Menu getQtdeJogadores={getQtdeJogadores} setQtdeJogadores={setQtdeJogadores} mudarTela={setTela}/>
    } else {
      return <Jogando getQtdeJogadores={getQtdeJogadores} mudarTela={setTela}/>
    }
  }

  return (
    <>
      <Head>
        <title>Verdade ou Desafio</title>
        <meta name="description" content="Jogo de verdade ou desafio/consequência." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        {renderizarTela()}
      </div>
    </>
  )
}