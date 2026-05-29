"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
const palavras = ["web", "mobile", "programacao","ciencia","computacao","teste","software","jogos","algoritmo","codigo","funcoes","vetores","tecnologia","aplicativo","Hash","lista","fila","objeto","artificial","compilador","mouse","login","tela","usuario","dados","frontend","backend","interface","recursividade","encapsulamento","abstracao"];

function getPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function Page() {
  const router = useRouter();
  const [palavra, setPalavra] = useState(getPalavra());
  const [corretas, setCorretas] = useState([]);
  const [erradas, setErradas] = useState([]);

  const tentar = (l) => {
    if (corretas.includes(l) || erradas.includes(l)) return;

    if (palavra.includes(l)) {
      setCorretas([...corretas, l]);
    } else {
      setErradas([...erradas, l]);
    }
  };

  const reiniciar = () => {
    setPalavra(getPalavra());
    setCorretas([]);
    setErradas([]);
  };

  const ganhou = palavra.split("").every((l) => corretas.includes(l));
  const perdeu = erradas.length >= 6;

  return (
    <div className={styles.container}>
      <h2>Jogo da Forca</h2> 
      <></>
      <svg className={styles.forca} viewBox="0 0 120 160">
        
        <line x1="10" y1="150" x2="110" y2="150" />
        <line x1="30" y1="150" x2="30" y2="10" />
        <line x1="30" y1="10" x2="80" y2="10" />
        <line x1="80" y1="10" x2="80" y2="30" />

        
        {erradas.length > 0 && <circle cx="80" cy="45" r="10" className={styles.boneco} />}
        {erradas.length > 1 && <line x1="80" y1="55" x2="80" y2="90" className={styles.boneco} />}
        {erradas.length > 2 && <line x1="80" y1="65" x2="65" y2="80" className={styles.boneco} />}
        {erradas.length > 3 && <line x1="80" y1="65" x2="95" y2="80" className={styles.boneco} />}
        {erradas.length > 4 && <line x1="80" y1="90" x2="65" y2="120" className={styles.boneco} />}
        {erradas.length > 5 && <line x1="80" y1="90" x2="95" y2="120" className={styles.boneco} />}
      </svg>
      <div className={styles.palavra}>
        {palavra.split("").map((l, i) => (
          <span key={i}>
            {corretas.includes(l) ? l : "_"}
          </span>
        ))}
      </div>

      <div className={styles.teclado}>
        {"abcdefghijklmnopqrstuvwxyz".split("").map((l) => (
          <button
            key={l}
            onClick={() => tentar(l)}
            disabled={corretas.includes(l) || erradas.includes(l)}
          >
            {l}
          </button>
        ))}
      
      </div>
      <br></br>
      <p className={styles.erros}>Erros: {erradas.length}/6</p><br></br>
      {(ganhou || perdeu) && (
        <div className={styles.fim}>
          <p>{ganhou ? "Você ganhou!!!" : `Perdeu, é uma pena... `}</p>
          <br></br>
          <h3>A palavra era: {palavra}</h3>
          <br></br>
          <button className={styles.botao} onClick={reiniciar}>Jogar novamente</button>
        </div>
        
      )}
      <br></br>
      <div className={styles.voltarContainer}>
        <button onClick={() => router.push("/")} className={styles.botaoVoltar}>
  ← Voltar
</button>
      </div>
    </div>
  );
}