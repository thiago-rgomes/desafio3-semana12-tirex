import { useState } from "react";
import ProductGallery from "./Section1/ProductGallery";
import ProductDetails from "./Section1/ProductDetails";
import ProductOptions from "./Section1/ProductOptions";
import ProductActions from "./Section1/ProductActions";
import ProductMeta from "./Section1/ProductMeta";
import ProductHighlight from "./Section1/ProductHighlight";

import descriptionImages1 from "../../assets/productpage/product/description-img2.png"
import descriptionImages2 from "../../assets/productpage/product/description-img2.png"
import AdditionalDescription from "./Section2/AdditionalDescription";
import RelatedProducts from "./Section3/RelatedProducts";

const product = {
  title: "Asgaard sofa",
  images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  price: 250000,
  rating: 4.5,
  reviews: 5,
  description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  sizes: ["L", "XL", "XS"],
  colors: ["#816DFA", "#000000", "#B88E2F"],
  sku: "SS001",
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
  additionalTitle:"Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.",
  additionalDescription:"Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
  descriptionImages: [descriptionImages1, descriptionImages2],
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
      <AdditionalDescription additionalTitle={product.additionalTitle} additionalDescription={product.additionalDescription} descriptionImages={product.descriptionImages}></AdditionalDescription>
      <RelatedProducts></RelatedProducts>

    </div>
    
  );
};

export default ProductPage;
    