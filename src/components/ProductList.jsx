import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const productPerPage = 10;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${productPerPage}&skip=${
            productPerPage * page
          }`
        );
        const data = await response.json();
        if (data.products.length === 0) {
          setHasMore(false);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          setPage((prevPage) => prevPage + 1);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };

    const onObservation = (items) => {
      const intersectingInfo = items[0];
      if (intersectingInfo.isIntersecting && hasMore && !loading) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onObservation);
    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page, loading]);

  return (
    <div>
      {/* Search Bar */}
      <div className="container mx-auto my-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Product List */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}

        {/* Error Message */}
        {error && <div className="text-center text-red-500 mt-4">{error}</div>}

        {/* Observer for Infinite Scroll */}
        {hasMore && !loading && (
          <div
            ref={loaderRef}
            className="flex justify-center items-center h-32"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        )}
      </div>
    </div>
  );
}
