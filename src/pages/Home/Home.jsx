import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import toast from "react-hot-toast";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);
  const handleSearch = () => {
    const matchedProduct = products?.filter(
      (product) => product?.title === searchProduct
    );
    if (matchedProduct.length > 0) {
      setFilteredProducts(matchedProduct);
    } else {
      toast.error("Product not found...");
      setFilteredProducts(products);
    }
  };

  return (
    <div className="bg-[#1111110D] py-10 px-4">
      <h1 className="mb-8 text-5xl font-bold text-center">Our Products</h1>
      <div className="flex flex-col items-center justify-center gap-10 mb-10">
        <div className="flex items-center justify-center mt-4 join xl:justify-start">
          <input
            className="w-[150px] input input-bordered join-item h-[56px] font-work-sans lg:w-[194px] lg:text-[20px]"
            placeholder="Enter name"
            id="input-element"
            onChange={(event) => setSearchProduct(event?.target?.value)}
          />
          <button
            className="btn join-item rounded-lg bg-green-500 h-[56px] normal-case text-white hover:bg-green-400 font-semibold w-[80px] lg:w-[100px] lg:text-[20px]"
            id="btn-apply"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="form-control">
          <input
            type="range"
            min={0}
            max="100"
            value="40"
            className="range range-success"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts?.map((product, idx) => (
            <ProductCard product={product} key={idx}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
