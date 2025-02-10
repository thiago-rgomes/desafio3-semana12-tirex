import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import CartPage from './cartPage/CartPage';
import ContactPage from './contactPage/ContactPage';
import CheckoutPage from './checkoutPage/CheckoutPage';
import ShopPage from './shopPage/ShopPage';
import ProductPage from './productPage/ProductPage';
import LoginPage from './loginPage/LoginPage'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';




export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="/contact" element={<ContactPage></ContactPage>} />
      <Route element={<ProtectedRoute></ProtectedRoute>}>
        <Route path="/checkout" element={<CheckoutPage></CheckoutPage>} />      
      </Route>
      <Route path="/shop" element={<ShopPage></ShopPage>} />
      <Route path="/product/:id" element={<ProductPage></ProductPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
      
      
    </Routes>
  );
}