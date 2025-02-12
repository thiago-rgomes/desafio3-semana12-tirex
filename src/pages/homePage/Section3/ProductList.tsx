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
  sortBy?: string;
  filterBy?: string;
  itemsToShow?: number;
}

const ProductList: React.FC<ProductListProps> = ({ sortBy = "Default", filterBy = "Crescent", itemsToShow = 16 }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  let filteredProducts = [...products];

  if (sortBy === "title") {
    filteredProducts.sort((a, b) => 
      filterBy === "Crescent" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  } else if (sortBy === "price") {
    filteredProducts.sort((a, b) => 
      filterBy === "Crescent" ? a.price - b.price : b.price - a.price
    );
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsToShow);
  const startIndex = (currentPage - 1) * itemsToShow;
  const endIndex = startIndex + itemsToShow;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => <ProductCard key={product.id} {...product} />)
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-14 gap-[38px] text-[20px]">        

        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`px-4 py-2 w-[60px] h-[60px] rounded-md ${
              currentPage === index + 1 ? "bg-[#B88E2F] text-white w-[60px] h-[60px] rounded-md" : "bg-[#F9F1E7]"
            } rounded`}>
            {index + 1}
          </button>
        ))}

        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
        className="flex justify-center items-center px-4 py-2 bg-[#F9F1E7] rounded-md disabled:opacity-50 w-[98px] h-[60px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;