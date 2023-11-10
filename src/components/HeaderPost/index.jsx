import Container from "react-bootstrap/Container";
import styles from "./Custom.module.css";
import { Button, Col, Row } from "react-bootstrap";

function HeadersPoster() {
  return (
    <Container fluid="md" className={styles.spacingCustom} id="start">
      <Row className="justify-content-md-center">
        <Col>
          <p>
            <span style={{ color: "#188c8d" }}>sinta o filme</span>, faça um
            teste para determinar seu humor e ter a{" "}
            <span style={{ color: "#7a7373" }}>
              experiência de visualização perfeita
            </span>{" "}
          </p>
        </Col>
      </Row>
      <Button variant="warning"> QUIZ</Button>{" "}
    </Container>
  );
}

export default HeadersPoster;
