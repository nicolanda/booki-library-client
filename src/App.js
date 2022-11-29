import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { RegisterPage } from './pages/RegisterPage';
// import { useEffect, useState } from 'react';
// import { getAllBooks } from './services/getAllBooks/getAllBooks';
import { ProductPage } from './pages/ProductPage';
import { LoginPage } from './pages/LoginPage';
import React from 'react';
import { Dashboard } from './pages/Dashboard';
import { AccountDashboard } from './components/users/dashboard/AccountDasboard';
import { PaymentDashboard } from './components/users/dashboard/PaymentDashboard';
import { AddressDashboard } from './components/users/dashboard/AddressDashboard';
import { HistoryOrdersDashboard } from './components/users/dashboard/HistoryOrdersDashboard';
import { CartPage } from './pages/CartPage';
import {
  shoppingInitialState,
  shoppingReducer
} from './reducers/shoppingReducer';
import { useReducer } from 'react';
import { BooksPages } from './pages/BooksPages';
import { TYPES } from './actions/shoppingActions';
import { AuthorsPage } from './pages/admin/AuthorsPage';
import { AuthorList } from './components/admin/book/autores/AuthorList';
import { CategoryPage } from './pages/admin/CategoryPage';
import { TaxesPage } from './pages/admin/TaxesPage';

function App() {
  // const [infoCard, setInfoCard] = useState({});

  // useEffect(() => {
  //   getAllBooks().then((data) => {
  //     setInfoCard(data);
  //   });
  // }, []);

  // const { books } = infoCard;
  // console.log(books);
  const [state, dispatch] = useReducer(
    shoppingReducer,
    shoppingInitialState
  );

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  return (
    <BrowserRouter>
      <CssBaseline />

      <Routes>
        {/* default route */}
        <Route
          path="/"
          element={
            <Home infobook={products} addToCart={addToCart} />
          }></Route>
        <Route
          path="/categoria/libros"
          element={<BooksPages infobook={products} />}
        />
        <Route
          path="/categoria/libros/:id"
          element={
            <ProductPage infobook={products} addToCart={addToCart} />
          }
        />
        <Route path="user" element="" />
        <Route path="user/login" element={<LoginPage />} />
        <Route path="user/register" element={<RegisterPage />} />
        <Route path="user/id/dashboard" element={<Dashboard />}>
          <Route path="formUser" element={<AccountDashboard />} />
          <Route path="payment" element={<PaymentDashboard />} />
          <Route path="address" element={<AddressDashboard />} />
          <Route path="orders" element={<HistoryOrdersDashboard />} />
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="taxes" element={<TaxesPage />} />
        </Route>
        <Route
          path="cart"
          element={
            <CartPage
              infobook={products}
              cart={cart}
              actions={deleteFromCart}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
 * Path: http://localhost:3000/user/id/dashboard
 */
