import { Helmet } from 'react-helmet-async';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import { products } from '../sampleData';

export default function ProductScreen() {
  return (
    <div>
      <Helmet>
        <title>Xtock</title>
      </Helmet>
      <h1>Produtos</h1>
      <Row>
        <Col>Nome</Col>
        <Col>Preço</Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {products.map((product) => (
              <ListGroup.Item key={product._id}>
                <Row>
                  <Col>
                    <Form>
                      <Form.Control
                        type="text"
                        defaultValue={product.name}
                      ></Form.Control>
                    </Form>
                  </Col>
                  <Col>
                    <Form>
                      <Form.Control
                        type="number"
                        defaultValue={product.price}
                      ></Form.Control>
                    </Form>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
