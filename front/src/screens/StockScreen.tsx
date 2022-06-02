import { Helmet } from 'react-helmet-async';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import { stocks } from '../sampleData';

export default function StockScreen() {
  return (
    <div>
      <Helmet>
        <title>Xtock</title>
      </Helmet>
      <h1>Estoque de Produtos</h1>
      <Row>
        <Col>Produto</Col>
        <Col>Quantidade</Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {stocks.map((stock) => (
              <ListGroup.Item key={stock._id}>
                <Row>
                  <Col>{stock.product.name}</Col>
                  <Col>
                    <Form>
                      <Form.Control
                        type="number"
                        defaultValue={stock.quantity}
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
