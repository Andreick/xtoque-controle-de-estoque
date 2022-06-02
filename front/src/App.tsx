import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductScreen from './screens/ProductScreen';
import StockScreen from './screens/StockScreen';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="light">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Xtoque</Navbar.Brand>
              </LinkContainer>
              <Nav className="justify-content-end">
                <Link className="nav-link" to="/">
                  Estoque
                </Link>
                <Link className="nav-link" to="/products">
                  Produtos
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<StockScreen />}></Route>
              <Route path="/products" element={<ProductScreen />}></Route>
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
