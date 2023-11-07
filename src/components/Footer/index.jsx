import React from "react";
import styles from "./Custom.module.css";
import Logo from "../../assets/img/logo-comp.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainerCustom}>
        <footer class="single_column  ">
          <nav className={styles.navFooter}>
            <div>
              <img
                className={styles.footerLogo}
                src={Logo}
                alt="filme favorito logo"
              />
            </div>
            <div>
              <h3>Envolva-se</h3>
              <ul>
                <li>
                  <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                  <a href="#">Top Filmes</a>
                </li>
                <li>
                  <a href="#">Top Séries</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Comunidade</h3>
              <ul>
                <li>
                  <a href="/documentation/community/guidelines?language=pt-BR">
                    Diretrizes
                  </a>
                </li>
                <li>
                  <a href="/discuss?language=pt-BR">Discussões</a>
                </li>
                <li>
                  <a href="/leaderboard?language=pt-BR">
                    Placar de colaboradores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Legalidade</h3>
              <ul>
                <li>
                  <a href="/terms-of-use?language=pt-BR">Termos de uso</a>
                </li>
                <li>
                  <a href="/api-terms-of-use?language=pt-BR">
                    Termos de Uso da API
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy?language=pt-BR">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="/dmca-policy?language=pt-BR">DMCA Policy</a>
                </li>
              </ul>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
