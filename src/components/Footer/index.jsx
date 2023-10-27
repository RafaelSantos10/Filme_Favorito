import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import styles from './Custom.module.css'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      
        <div className={styles.footerContainerCustom}>
        <footer class="single_column  ">
      <nav className={styles.navFooter}>
        <div class="join">
          
        </div>

        <div>
          <h3>O básico</h3>
    
        </div>
        <div>
          <h3>Envolva-se</h3>
          <ul>
            <li><a href="/bible?language=pt-BR"><span class="glyphicons glyphicons-asterisk"></span> Bíblia do Colaborador</a></li>
            <li><a href="/movie/new?language=pt-BR">Adicionar um novo Filme</a></li>
            <li><a href="/tv/new?language=pt-BR">Adicionar uma nova Série</a></li>
          </ul>
        </div>
        <div>
          <h3>Comunidade</h3>
          <ul>
            <li><a href="/documentation/community/guidelines?language=pt-BR">Diretrizes</a></li>
            <li><a href="/discuss?language=pt-BR">Discussões</a></li>
            <li><a href="/leaderboard?language=pt-BR">Placar de colaboradores</a></li>
          </ul>
        </div>
        <div>
          <h3>Legalidade</h3>
          <ul>
            <li><a href="/terms-of-use?language=pt-BR">Termos de uso</a></li>
            <li><a href="/api-terms-of-use?language=pt-BR">Termos de Uso da API</a></li>
            <li><a href="/privacy-policy?language=pt-BR">Política de privacidade</a></li>
            <li><a href="/dmca-policy?language=pt-BR">DMCA Policy</a></li>
          </ul>
        </div>
      </nav>

    
    </footer>
        </div>
     
      
    </>
  );
};

export default Footer;
