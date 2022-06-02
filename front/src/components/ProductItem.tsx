import { useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import Product from '../interfaces/Product';

type Props = { product: Product };

export default function ProductItem({ product }: Props) {
  const [editable, setEditable] = useState(false);

  return (
    <ListGroup.Item>
      <Row>
        <Col>
          <Form>
            <Form.Control
              type="text"
              defaultValue={product.name}
              disabled={!editable}
            ></Form.Control>
          </Form>
        </Col>
        <Col>
          <Form>
            <Form.Control
              type="number"
              defaultValue={product.price}
              disabled={!editable}
            ></Form.Control>
          </Form>
        </Col>
        <Col md="auto">
          <Button variant="light" onClick={() => setEditable(!editable)}>
            <i className="fas fa-pen"></i>
          </Button>
        </Col>
        <Col md="auto">
          <Button variant="light">
            <i className="fas fa-trash"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
