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
            <div className={styles.customTextFooter}>
              <img
                className={styles.footerLogo}
                src={Logo}
                alt="filme favorito logo"
              />
            </div>
            <div className={styles.customTextFooter}>
              <h3>Navegação Rápida</h3>
              <ul>
                <li>
                  <a href="#start">Inicio</a>
                </li>
                <li>
                  <a href="#topMovies">Top Filmes</a>
                </li>
                <li>
                  <a href="#topSeries">Top Séries</a>
                </li>
              </ul>
            </div>
            <div className={styles.customTextFooter}>
              <h3>Quem sou ?</h3>
              <ul>
                <li>
                  <a
                    href="https://github.com/RafaelSantos10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/rafael-santos-065794293/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="mailto:faelsant10@gmail.com"> E-mail</a>
                </li>
              </ul>
            </div>
            <div className={styles.customTextFooter}>
              <h3>Sobre a API</h3>
              <ul>
                <li>
                  <a
                    href="https://developer.themoviedb.org/reference/intro/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Começando
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.themoviedb.org/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Registrar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.themoviedb.org/?language=pt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    TMDB
                  </a>
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
