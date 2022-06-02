import { Helmet } from 'react-helmet-async';
import { Alert, Button } from 'react-bootstrap';
import Product from '../interfaces/Product';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import getError from '../utils/ErrorUtils';
import LoadingBox from '../components/LoadingBox';
import ProductList from '../components/ProductList';

const initialState = {
  products: Array<Product>(),
  loading: false,
  error: '',
};

type FetchProductsAction =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAIL'; payload: string };

const reducer = (state: typeof initialState, action: FetchProductsAction) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
  }
};

export default function ProductScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Xtock</title>
      </Helmet>
      <h1>Produtos</h1>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <div>
          <ProductList products={products} />
          <Button variant="outline-success">Salvar Alterações</Button>
        </div>
      )}
    </div>
  );
}
