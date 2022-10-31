// import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Image, ListGroup, Form,Button } from "react-bootstrap";

const CartItemComponent=()=>{
    return(
        <>
        <ListGroup.Item>
            <Row>
                <Col md={2}>
                    <Image crossOrigin="anonymous" style={{ width: "100px", height: "100px", objectFit: "cover" }} src="/images/potato-category.jpg" fluid/>
                </Col>
                <Col md={2}>
                    Potato <br />
                    1lb
                </Col>
                <Col md={2}>
                <b>$8.99</b>
                </Col>
                <Col md={3}>
                <Form.Select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </Form.Select>
                </Col>
                <Col md={3}>
                <Button type="button" variant="secondary" onClick={()=> window.confirm("Are you sue?")}>
                    <i className="bi bi-trash"></i>
                </Button>
                </Col>
            </Row>
            </ListGroup.Item>
            <br />
        </>
    )
}

export default CartItemComponent