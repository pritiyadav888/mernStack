import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  // eslint-disable-next-line no-unused-vars
  const images = [
    "/images/mae-mu-9002s2VnOAY-unsplash.jpg",
    "/images/image7.jpg",
    "/images/oliver-sjostrom-cff_w0ADWIA-unsplash.jpg",
    "/images/andrew-butler-aUu8tZFNgfM-unsplash.jpg",
    "/images/carousel/image3.jpg",
  ];

  return (
    <Card className="mb-5" style={{ width: "17rem" ,margin:"30px"}}>
      <Card.Img
        style={{ objectFit: "cover" }}
        crossorigin="anonymous"
        variant="top"
        src={images[idx]}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <LinkContainer to="/listing">
          <Button variant="primary">Go to the category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
