import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import CartPage from './cartPage/CartPage';
import ContactPage from './contactPage/ContactPage';
import CheckoutPage from './checkoutPage/checkoutPage';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="/contact" element={<ContactPage></ContactPage>} />
      <Route path="/checkout" element={<CheckoutPage></CheckoutPage>} />
      
      
    </Routes>
  );
}