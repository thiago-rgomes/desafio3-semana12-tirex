import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

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
}

const ProductList: React.FC<ProductListProps> = ({ itemsToShow = 8 }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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
  }, []);

  if (loading) return <p className="text-center">loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
      {products.slice(0, itemsToShow).map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
