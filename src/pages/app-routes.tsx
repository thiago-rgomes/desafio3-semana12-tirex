import { Route, Routes } from 'react-router-dom';
import HomePage from './homePage/HomePage';
import CartPage from './cartPage/CartPage';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      
    </Routes>
  );
}