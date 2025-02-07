import React from "react";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  price,
  oldPrice,
  imageUrl,
  isNew,
  discount,
}) => {
  return (
    <div className="max-w-[285px] max-h-[446px] overflow-hidden bg-white">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-[285px] h-[301px] object-cover" />
        {isNew && <span className="absolute top-6 right-6 flex justify-center items-center w-[48px] h-[48px] font-medium bg-[#2EC1AC] text-white px-2 py-1 rounded-full">New</span>}
        {discount && <span className="absolute top-6 right-6 flex justify-center items-center w-[48px] h-[48px] font-medium bg-[#E97171] text-white px-2 py-1 rounded-full">-{discount}%</span>}
      </div>
      <div className="p-4 bg-[#F4F5F7] h-[145px] ">
        <h3 className="text-[24px] font-semibold text-[#3A3A3A]">{name}</h3>
        <p className="font-medium text-[#898989]">{description}</p>
        <div className="relative mt-2">
          <span className="text-[20px] font-semibold text-[#3A3A3A]">Rp {price.toLocaleString()}</span>
          {oldPrice && (
            <span className="absolute right-4 text-gray-400 line-through ml-2">Rp {oldPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
