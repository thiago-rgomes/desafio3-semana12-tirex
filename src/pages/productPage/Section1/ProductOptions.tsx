interface ProductOptionsProps {
    sizes: string[];
    colors: string[];
    selectedSize: string;
    setSelectedSize: (size: string) => void;
    selectedColor: string;
    setSelectedColor: (color: string) => void;
  }
  
  const ProductOptions: React.FC<ProductOptionsProps> = ({
    sizes,
    colors,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
  }) => {
    return (
      <div className="mt-4">
        <div>
          <h3 className="text-[14px] text-[#9F9F9F]">Size</h3>
          <div className="flex gap-3 mt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-[30px] h-[30px] text-[13px] border rounded ${
                  selectedSize === size ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
  
        <div className="mt-4">
          <h3 className="text-[14px] text-[#9F9F9F]">Color</h3>
          <div className="flex gap-4 mt-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border ${
                  selectedColor === color ? "ring-2 ring-yellow-400" : ""
                }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductOptions;
  