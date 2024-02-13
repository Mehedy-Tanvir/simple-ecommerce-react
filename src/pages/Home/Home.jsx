import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return <div>This is home.</div>;
};

export default Home;
