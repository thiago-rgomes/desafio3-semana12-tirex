import HighLightSection from "../../components/HighLight/HighLightSection";
import QualitySection from "../../components/Quality/QualitySection";
import { useCart } from "../../hooks/useCart";
import CartSection from "./CartSection";

export default function CartPage() {
  const { items } = useCart();

  return (
    <div>
        <HighLightSection pageTitle="Cart"></HighLightSection>
        <div className="flex flex-col w-full mx-auto pl-[100px] pr-[100px] py-[70px]">
        {items.length === 0 ? (
            <p className="text-gray-500 text-[38px] text-center">Your cart is empty.</p>
        ) : (
            <CartSection></CartSection>
        )}        
        </div>
        <QualitySection></QualitySection> 
    </div>
    
  );
}
