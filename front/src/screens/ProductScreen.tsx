import { Helmet } from 'react-helmet-async';
import { Alert } from 'react-bootstrap';
import Product from '../interfaces/Product';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import getError from '../utils/ErrorUtils';
import LoadingBox from '../components/LoadingBox';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const initialState = {
  product: undefined as Product | undefined,
  loading: false,
  error: '',
};

type FetchProductsAction =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product }
  | { type: 'FETCH_FAIL'; payload: string };

const reducer = (state: typeof initialState, action: FetchProductsAction) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
  }
};

export default function ProductScreen() {
  const { id } = useParams();

  const [{ loading, error, product }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [id]);

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
        <ProductForm product={product} />
      )}
    </div>
  );
}
