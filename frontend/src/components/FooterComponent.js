import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer >
      <Container fluid>
        <Row className="mt-5">
          <Col className="text-black text-center py-5" style={{ background: 'linear-gradient(90deg, hsla(300, 43%, 8%, 1) 0%, hsla(210, 72%, 49%, 1) 76%, hsla(206, 67%, 75%, 1) 100%)' }}>
            Copyright &copy; Last Call
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
