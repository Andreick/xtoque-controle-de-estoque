import axios from 'axios';
import { useReducer, useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Product from '../interfaces/Product';
import getError from '../utils/ErrorUtils';
import LoadingBox from './LoadingBox';

type Props = { product?: Product };

const initialState = {
  loading: false,
  error: '',
};

type FetchProductsAction =
  | { type: 'REQUEST' }
  | { type: 'REQUEST_SUCCESS' }
  | { type: 'REQUEST_FAIL'; payload: string };

const reducer = (state: typeof initialState, action: FetchProductsAction) => {
  switch (action.type) {
    case 'REQUEST':
      return { ...state, loading: true, error: '' };
    case 'REQUEST_SUCCESS':
      return { ...state, loading: false };
    case 'REQUEST_FAIL':
      return { ...state, loading: false, error: action.payload };
  }
};

export default function ProductForm({
  product = { _id: '', name: '', price: 0 },
}: Props) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirect = new URLSearchParams(search).get('redirect') ?? '/products';

  const [{ loading, error }, dispatch] = useReducer(reducer, initialState);

  const [productState, setProductState] = useState(product);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    dispatch({ type: 'REQUEST' });
    try {
      if (product._id) await updateProduct();
      else await createProduct();
    } catch (err) {
      dispatch({ type: 'REQUEST_FAIL', payload: getError(err) });
    }
  };

  const createProduct = async () => {
    await axios.post('/api/products', productState);
    dispatch({ type: 'REQUEST_SUCCESS' });
    toast.success('Produto criado com sucesso');
    onRedirect();
  };

  const updateProduct = async () => {
    await axios.put(`/api/products/${product._id}`, productState);
    dispatch({ type: 'REQUEST_SUCCESS' });
    toast.success('Produto atualizado com sucesso');
    onRedirect();
  };

  const onRedirect = () => navigate(redirect);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Form className="small-container" onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={productState.name}
              onChange={(e) =>
                setProductState({ ...product, name: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              required
              defaultValue={productState.price}
              onChange={(e) =>
                setProductState({ ...product, price: Number(e.target.value) })
              }
            ></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button onClick={onRedirect}>Cancelar</Button>{' '}
            <Button variant="outline-success" type="submit">
              Salvar
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}
