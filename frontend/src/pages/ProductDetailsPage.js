import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Button,
  Form,
  Alert,
} from "react-bootstrap";
import AddToCartComponent from "../components/AddToCartComponent";
const ProductDetailsPage = () => {
  return (
    <Container>
      <AddToCartComponent />
      <Row className="mt-5">
        <Col md={4}>
            <div><Image
            fluid
            style={{ width: "330px", height: "150px", objectFit: "cover" }}
            src="/images/potato-category.jpg"
          /></div>
          <br />
          <div><Image
            fluid
            style={{ width: "330px", height: "150px", objectFit: "cover" }}
            src="/images/potato-category.jpg"
          /></div><br />
          
          <div><Image
            fluid
            style={{ width: "330px", height: "150px", objectFit: "cover" }}
            src="/images/potato-category.jpg"
          /></div><br />
          
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item><h1>Product Name</h1>Potato</ListGroup.Item>
                <ListGroup.Item>Desc 1</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$8.99</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price: <span className="fw-bold">$8.99</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 2 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    John Doe <br />
                    20-09-2001 <br />
                    Porta ac consectetur ac Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Perferendis, illo.
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Alert variant="danger">Login first to write a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write a review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            {/* <Form.Select aria-label="Default select example">
              <option>Your rating</option>
              <option value="5">5 (very good)</option>
              <option value="4">4 (good)</option>
              <option value="3">3 (average)</option>
              <option value="2">2 (bad)</option>
              <option value="1">1 (awful)</option>
            </Form.Select> */}
            <Button className="mb-3 mt-3" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
