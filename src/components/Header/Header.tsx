import { useState } from "react"
import { useCart } from "../../hooks/useCart";
import { Link, useNavigate } from "react-router-dom"
import siteLogo from '../../assets/header/site-logo.png';
import userIcon from '../../assets/header/user-icon.png';
import cartIcon from '../../assets/header/cart-icon.png'
import CartModal from "./CartModal";



const Header = () => {
    
    const navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);
    const { items, removeFromCart } = useCart();    
    
    return (

      <div className="flex justify-between items-center w-full min-w-[950px] h-[100px] pl-[54px] pr-[100px]">
        <div className="flex justify-center items-center gap-[5px]">
          <img src={siteLogo} alt="site-logo" className="w-[50px] h-[32px]" />
          <p className="font-montserrat text-[36px] font-bold">Furniro</p>
        </div>
            
        <nav className="flex justify-between w-[430px] font-medium text-base">              
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="">About</Link>
          <Link to="/contact">Contact</Link>            
        </nav>

        <div className="flex gap-[34px]">   
        <Link to="/login"> <img src={userIcon} alt="user-icon" className="w-[23px] h-[19px] cursor-pointer" /> </Link>

          <div onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
            <img src={cartIcon} alt="cart-icon" className="w-[23px] h-[19px]" onClick={() => navigate("/cartPage")} />
          </div>
        </div>

        {/*Cart's Modal*/}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">

            <div className="absolute right-0 mt-2 w-[417px] bg-white shadow-lg rounded-lg p-4 z-50 overflow-y-auto "
              onMouseEnter={() => setShowCart(true)} 
              onMouseLeave={() => setShowCart(false)}>
            <CartModal items={items} onClose={() => setShowCart(false)} onRemoveItem={removeFromCart} />
            </div>
          </div>             
        )}
        
      </div>
  )
  }

export default Header

