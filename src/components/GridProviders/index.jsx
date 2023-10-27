import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Figure from 'react-bootstrap/Figure';
import styles from "./Custom.module.css";

const urlProviders = import.meta.env.VITE_PROVIDERS;
const apiKey = import.meta.env.VITE_API_KEY;
const imageURL = import.meta.env.VITE_IMG

const GridProviders = () => {
  const [providers, setProviders] = useState([]);

  const getProviders = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setProviders(data.results.slice(0,36));
  };

  useEffect(() => {
    const providersUrl = `${urlProviders}?${apiKey}&language=pt-BR&include_image_language=pt-BR&include_adult=false&page=1&sort_by=popularity.desc`;
    getProviders(providersUrl);
  }, []);

  console.log(providers);
  return (
    <>
      <Container className={styles.GridContainerCustom}>
        <Row>
          {providers &&
            providers.map((provider) => {
              return (
                <>
                  <Col xs="1" key={provider.id}>
                    {
                      <Figure>
                        <Figure.Image
                          width={80}
                          height={80}
                          alt="171x180"
                          src={imageURL +provider.logo_path}
                        />
                        
                      </Figure>
                    }
                  </Col>
                </>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default GridProviders;
