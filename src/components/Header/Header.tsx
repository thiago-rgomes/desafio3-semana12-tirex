import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Link, useNavigate } from "react-router-dom";
import siteLogo from '../../assets/header/site-logo.png';
import userIcon from '../../assets/header/user-icon.png';
import cartIcon from '../../assets/header/cart-icon.png';
import CartModal from "../../context/CartModal";

const Header = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const { items, removeFromCart } = useCart();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full min-w-[320px] p-4 md:pl-[54px] md:pr-[100px]">
      {/* Logo and Site Name */}
      <div className="flex justify-center items-center gap-[5px] mb-4 md:mb-0">
        <img src={siteLogo} alt="site-logo" className="w-[50px] h-[32px]" />
        <p className="font-montserrat text-[24px] md:text-[36px] font-bold">Furniro</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-4 md:gap-0 md:justify-between w-full md:w-[430px] font-medium text-base">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/shop" className="hover:text-gray-500">Shop</Link>
        <Link to="" className="hover:text-gray-500">About</Link>
        <Link to="/contact" className="hover:text-gray-500">Contact</Link>
      </nav>

      {/* User and Cart Icons */}
      <div className="flex gap-[34px] mt-4 md:mt-0">
        <Link to="/login">
          <img src={userIcon} alt="user-icon" className="w-[23px] h-[19px] cursor-pointer" />
        </Link>

        <div onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
          <img src={cartIcon} alt="cart-icon" className="w-[23px] h-[19px] cursor-pointer" onClick={() => navigate("/cartPage")} />
        </div>
      </div>

      {/* Cart's Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div
            className="absolute right-0 mt-2 w-full md:w-[417px] bg-white shadow-lg rounded-lg p-4 z-50 overflow-y-auto"
            onMouseEnter={() => setShowCart(true)}
            onMouseLeave={() => setShowCart(false)}
          >
            <CartModal items={items} onClose={() => setShowCart(false)} onRemoveItem={removeFromCart} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;