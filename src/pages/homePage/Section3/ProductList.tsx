import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Spinner from "../../../components/Spinner/Spinner";

interface Product {
  id: number;
  name: string;
  subName: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductListProps {
  itemsToShow?: number;
  filteredProducts?: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ itemsToShow = 8, filteredProducts }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!filteredProducts) {
      const fetchProducts = async () => {
        try {
      
          await new Promise((resolve) => setTimeout(resolve, 3000));

          const response = await fetch("http://localhost:5000/products");
          if (!response.ok) {
            throw new Error("Error on finding products");
          }
          const data: Product[] = await response.json();
          setProducts(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    } else {
      setLoading(false);
    }
  }, [filteredProducts]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const displayedProducts = (filteredProducts || products).slice(0, itemsToShow);

  return (
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
      {displayedProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
