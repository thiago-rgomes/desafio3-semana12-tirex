import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import CartPage from './cartPage/CartPage';
import ContactPage from './contactPage/ContactPage';
import CheckoutPage from './checkoutPage/CheckoutPage';
import ShopPage from './shopPage/ShopPage';
import ProductPage from './productPage/ProductPage';



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="/contact" element={<ContactPage></ContactPage>} />
      <Route path="/checkout" element={<CheckoutPage></CheckoutPage>} />
      <Route path="/shop" element={<ShopPage></ShopPage>} />
      <Route path="/product" element={<ProductPage></ProductPage>} />
      
      
    </Routes>
  );
}