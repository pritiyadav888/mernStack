import { Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const ProductForListComponent = ({images,idx}) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img style={{height:"300px" , objectFit:"cover"}} variant="top" src={"/images/" + images[idx] + "-category.jpg"} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Text>
              Product Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magni ipsa ducimus architecto explicabo id
              accusantium nihil exercitationem autem porro esse.
            </Card.Text>
            <Card.Text className="h4">
              $7.99{" "}
              <LinkContainer to="/product-details">
                <Button variant="danger">Details</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
