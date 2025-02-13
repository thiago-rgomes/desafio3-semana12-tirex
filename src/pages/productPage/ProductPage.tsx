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
import Spinner from "../../components/Spinner/Spinner";
import { useCart } from "../../hooks/useCart";

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
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setLoading(true);
        console.log("Finding product with id:", id);
        const response = await fetch(`http://localhost:3000/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
        setSelectedSize(data.sizes[0]);
        setSelectedColor(data.colors[0]);
      } catch (error) {
        console.error("Error finding the product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = (quantity: number) => {
    if (product) {
      
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: quantity,
        imageUrl: product.images[0],
      });
      console.log(`Added ${quantity}x ${product.title} to the cart`);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div>
      <ProductHighlight title={product.title} />

      <div className="flex flex-col justify-center md:flex-row md:justify-center px-6 md:px-0 md:gap-[150px] pt-[30px] pb-[60px]">
        <ProductGallery images={product.images} />
        <div className="md:max-w-[506px]">
          <ProductDetails {...product} />
          <ProductOptions
            sizes={product.sizes}
            colors={product.colors}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
          <ProductActions
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              imageUrl: product.images[0],
            }}
            onAddToCart={handleAddToCart}
          />
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