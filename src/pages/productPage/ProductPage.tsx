import { useState } from "react";
import ProductGallery from "./Section1/ProductGallery";
import ProductDetails from "./Section1/ProductDetails";
import ProductOptions from "./Section1/ProductOptions";
import ProductActions from "./Section1/ProductActions";
import ProductMeta from "./Section1/ProductMeta";
import ProductHighlight from "./Section1/ProductHighlight";

const product = {
  title: "Asgaard sofa",
  price: 250000,
  rating: 4.5,
  reviews: 5,
  description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  sizes: ["L", "XL", "XS"],
  colors: ["#816DFA", "#000000", "#B88E2F"],
  sku: "SS001",
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
};

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = (quantity: number) => {
    console.log(`Adicionado ${quantity}x ${product.title} ao carrinho`);
  };

  return (
    <div>
      <ProductHighlight title={product.title}></ProductHighlight>

      <div className="flex justify-center gap-[150px] pt-[30px] pb-[60px]">
        <ProductGallery images={product.images} />
        <div className="max-w-[506px]">
          <ProductDetails {...product} />
          <ProductOptions
            sizes={product.sizes}
            colors={product.colors}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ProductActions onAddToCart={handleAddToCart} />
          <ProductMeta sku={product.sku} category={product.category} tags={product.tags} />
        </div>
     </div>

    </div>
    
  );
};

export default ProductPage;
    