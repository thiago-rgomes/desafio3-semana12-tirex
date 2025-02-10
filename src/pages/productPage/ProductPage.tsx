import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "./Section1/ProductGallery";
import ProductDetails from "./Section1/ProductDetails";
import ProductOptions from "./Section1/ProductOptions";
import ProductActions from "./Section1/ProductActions";
import ProductMeta from "./Section1/ProductMeta";
import ProductHighlight from "./Section1/ProductHighlight";
import AdditionalDescription from "./Section2/AdditionalDescription";
import RelatedProducts from "./Section3/RelatedProducts";

interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  colors: string[];
  sku: string;
  category: string;
  tags: string[];
  additionalTitle: string;
  additionalDescription: string;
  descriptionImages: string[];
}

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState<any | null>(null); 
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  
useEffect(() => {
  const fetchProduct = async () => {
    if (!id) return; 

    try {
      console.log("Buscando produto com ID:", id);
      const response = await fetch(`http://localhost:5000/products/${id}`);

      if (!response.ok) {
        throw new Error("Product not found");
      }

      const data = await response.json();
      setProduct(data);
      setSelectedSize(data.sizes[0]);
      setSelectedColor(data.colors[0]);

    } catch (error) {
      console.error("Error on finding the product:", error);
    }
  };

  fetchProduct();
}, [id]);


  const handleAddToCart = (quantity: number) => {
    if (product) {
      console.log(`Adicionado ${quantity}x ${product.title} ao carrinho`);
    }
  };

  if (!product) {
    return <div className="text-center py-10">Loading product...</div>;
  }

  return (
    <div>
      <ProductHighlight title={product.title} />

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
      <AdditionalDescription
        additionalTitle={product.additionalTitle}
        additionalDescription={product.additionalDescription}
        descriptionImages={product.descriptionImages}
      />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;

