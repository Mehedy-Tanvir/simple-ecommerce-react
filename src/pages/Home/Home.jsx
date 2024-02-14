import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return <div>Total Products: {products?.length}</div>;
};

export default Home;
