import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import shareIcon from "../../../assets/homepage/section3/share-icon.png";
import compareIcon from "../../../assets/homepage/section3/compare-icon.png";
import heartIcon from "../../../assets/homepage/section3/heart-icon.png";

interface ProductProps {
  id: number;
  name: string;
  subName: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, subName, price, oldPrice, imageUrl, isNew, discount,
}) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="max-w-[285px] max-h-[446px] overflow-hidden bg-white relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-[285px] h-[301px] object-cover" />
        {isNew && <span className="absolute top-6 right-6 flex justify-center items-center w-[48px] h-[48px] font-medium bg-[#2EC1AC] text-white px-2 py-1 rounded-full">New</span>}
        {discount && <span className="absolute top-6 right-6 flex justify-center items-center w-[48px] h-[48px] font-medium bg-[#E97171] text-white px-2 py-1 rounded-full">-{discount}%</span>}
      </div>

      <div className="p-4 bg-[#F4F5F7] h-[145px]">
        <h3 className="text-[24px] font-semibold text-[#3A3A3A]">{name}</h3>
        <p className="font-medium text-[#898989]">{subName}</p>
        <div className="relative mt-2 flex justify-between items-center">
          <span className="text-[20px] font-semibold text-[#3A3A3A]">Rp {price.toLocaleString()}</span>
          {oldPrice && (
            <span className="absolute right-4 text-gray-400 line-through ml-2">Rp {oldPrice.toLocaleString()}</span>
          )}
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center gap-3 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({ id, name, price, quantity: 1, imageUrl });
            }}
            className="bg-white text-[#B88E2F] font-semibold px-6 py-2 w-[202px] h-[48px]"
          >
            Add to Cart
          </button>
          <div className="flex gap-4 text-white font-semibold">
            <span className="flex justify-center items-center gap-[2px]">
              <img src={shareIcon} alt="share icon" className="w-[13px] h-[14px]" /> Share
            </span>
            <span className="flex justify-center items-center gap-[2px]">
              <img src={compareIcon} alt="compare icon" className="w-[13px] h-[14px]" /> Compare
            </span>
            <span className="flex justify-center items-center gap-[2px]">
              <img src={heartIcon} alt="heart icon" className="w-[13px] h-[14px]" /> Like
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
