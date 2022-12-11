import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
    const cursorP = {
        cursor: 'pointer'
    }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{height:"300px" , objectFit:"cover"}}
          src="/images/carousel/image2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <LinkContainer style={cursorP} to="/product-details"><h3>Best Offer</h3></LinkContainer>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px" , objectFit:"cover"}}
          src="/images/carousel/image5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details"><h3>Best Offer</h3></LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"300px" , objectFit:"cover"}}
          src="/images/carousel/image8.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <LinkContainer style={cursorP} to="/product-details"><h3>Best Offer</h3></LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;
