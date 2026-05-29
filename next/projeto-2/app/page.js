import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function page() {
  return (
    
      <main className={styles.main}>
        
        
          <div className={styles.container}>
            <div className={styles.sidebar}>
          <Image
  src="/Minha-Foto.jpeg"
  alt="Foto de Daniel Costa"
  width={150}
  height={150}
  className={styles.foto}
/>
<br></br>
          <h4>
            Habilidades:
          </h4>
          <br></br>
          <ul>
            <li>Inglês intermediário;</li>
            <li>Programação em pyhton;</li>
            <li>Excel básico;</li>
            <li>Programação em C;</li>
            <li>Programação em java;</li>
            <li>Programação Html.</li>
            </ul>
            <br></br>
          <h4>Educação:</h4>
          <p>Cursando Ciência da Computação na Universidade Católica de Penrambuco</p><br></br>

          <h4>Detalhes de Contato:</h4><br></br><ul>
          <li>daniel1405costa@gmail.com</li>
          <li>WhatsApp: 81 99344-2633</li>
          </ul>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.content}>
          <h1>Daniel Silva Costa</h1>
          <br></br>
          <p>Sou aluno do curso de Ciência da Computação</p>
          <br></br>
          <h2>Resumo</h2>
          <br></br>
          <p>Estudante procurando estágio na minha área,tenho pouca experiência o ambito profissional,mas já fiz alguns projetos acadêmicos</p>
          <br></br>
          <h2>
            Experiência profissional
          </h2>
          <br></br>
          <h4>
            Jovem Aprendiz Administrativo do Financeiro, ASA Industria
          </h4>
          <br></br>
          <ul>
            <li>Criação de borderôs;</li>
            <li>Comparação de dados;</li>
            <li>Uso de tabelas Excel.</li>
            </ul>
            <br></br>
          <h2>
            Experiência acadêmica
          </h2>
          <br></br>
          <h4>
            Projeto extencionista, Biblioteca Carangueijo Tabaiares
          </h4>
          <br></br>
          <ul>
            <li>Workshop de Cubo Mágico para crianças que frequentavam a biblioteca. A proposta foi ajudar a desenvolver curiosidade, criatividade e cordenação motora</li><br></br>
            <li>Workshop de Excel para funcionários da biblioteca. A proposta foi auxiliar funcionários com as dificuldades que tinham com o uso de excel</li>
            </ul>
          <br></br>
          <h4>Projeto extensionista, Colégio Liceu Nóbrega de Artes e Ofícios</h4>
          <br></br>
          <ul>
          <li>Foi feita uma APi com o objetivo de auxiliar uma equipe de robótica, Coliceu, que em 2025 estavam com objetivo de fazer algo que auxiliasse os arqueologos.
            Eles tiveram a ideia de dar um kit de arqueologia e nos pediram um app que ajudasse a mapear sitios arqueologicos.</li>
            <br></br><li>Api feita para funcionar de forma offline com mapa estilo xadrez expansivel.No período de 2 meses,concluímos o projeto.</li>
          </ul>
          <br></br>
          <h4>
            Jogo da Forca, Marcio Augusto Silva Bueno
          </h4>
          <br></br>
          <p>
            Trabalho que fiz solicitado pelo professor da cadeira de Programação web e mobile. pode ser acessado clicando no botão jogar. 
          </p>
          <br></br>
          <div className={styles.botaoContainer}><Link href="/jogo-da-forca" className={styles.botao}>Jogar</Link></div>
          </div>
           
          </div>
           
      </main>
  );
}
