import { useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import Product from '../interfaces/Product';
import ProductItem from './ProductItem';

type Props = { products: Product[] };

export default function ProductList({ products }: Props) {
  const [editable, setEditable] = useState(false);

  return (
    <div>
      <Row>
        <Col>Nome</Col>
        <Col>Preço</Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
