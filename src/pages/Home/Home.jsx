import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  console.log(products);
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div className="bg-[#1111110D] py-10 px-4">
      <h1 className="mb-8 text-5xl font-bold text-center">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product, idx) => (
          <ProductCard product={product} key={idx}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
