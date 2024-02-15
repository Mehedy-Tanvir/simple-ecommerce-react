import PropTypes from "prop-types";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
const ProductCard = ({ product, cartProducts, setCartProducts, setAmount }) => {
  // adding to cart
  const handleAddToCart = (addedProduct) => {
    const currentCartProducts = [...cartProducts];
    currentCartProducts.push(addedProduct);
    setCartProducts(currentCartProducts);
    updateAmount(currentCartProducts);
    toast.success("Product added to cart...");
  };
  // updating the total amount of cart
  const updateAmount = (currentCartProducts) => {
    const totalPrice = currentCartProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    setAmount(totalPrice);
  };
  return (
    <div className="card cursor-pointer hover:scale-105 ease-in-out duration-300 xl:w-[342px] px-5 pt-5 bg-base-100 items-center active:scale-95">
      <figure className="w-[250px] xl:w-[302px] h-[200px] bg-[#1111110D]">
        {/* product image */}
        <img
          src={product?.thumbnail}
          alt="products"
          className="rounded-xl w-[150px] max-h-[150px]"
        />
      </figure>
      <div className="items-center text-center card-body">
        {/* product rating */}
        <div className="rating">
          <Rating
            placeholderRating={product?.rating}
            emptySymbol={<FaRegStar className="text-2xl text-orange-400" />}
            placeholderSymbol={<FaStar className="text-2xl text-orange-400" />}
            fullSymbol={<FaStar className="text-2xl text-orange-400" />}
          />
        </div>
        {/* product title */}
        <h2 className="card-title text-[#111] text-[20px] font-semibold font-work-sans">
          {product?.title}
        </h2>
        {/* product price */}
        <p className="text-[#11111180] font-work-sans font-normal text-[20px]">
          {product?.price} ₹
        </p>
        <div className="w-full mt-6">
          {/* button for adding to cart */}
          <button
            onClick={() => handleAddToCart(product)}
            className="btn text-white hover:bg-orange-400 bg-orange-500 text-[15px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
// props vallidation
ProductCard.propTypes = {
  product: PropTypes.object,
  cartProducts: PropTypes.array,
  setCartProducts: PropTypes.func,
  setAmount: PropTypes.func,
};
export default ProductCard;
