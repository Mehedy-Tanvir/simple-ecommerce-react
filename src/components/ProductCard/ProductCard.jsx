const ProductCard = ({ product }) => {
  return (
    <div className="card cursor-pointer hover:scale-105 ease-in-out duration-300 xl:w-[342px] px-5 pt-5 bg-base-100 items-center active:scale-95">
      <figure className="w-[250px] xl:w-[302px] h-[200px] bg-[#1111110D]">
        <img
          src={product?.thumbnail}
          alt="Shoes"
          className="rounded-xl w-[150px] max-h-[150px]"
        />
      </figure>
      <div className="items-center text-center card-body">
        <div className="rating" onClick={(event) => event.stopPropagation()}>
          <input
            type="radio"
            name="prod1"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="prod1"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="prod1"
            className="bg-orange-400 mask mask-star-2"
            checked
          />
          <input
            type="radio"
            name="prod1"
            className="bg-orange-400 mask mask-star-2"
          />
          <input
            type="radio"
            name="prod1"
            className="bg-orange-400 mask mask-star-2"
          />
        </div>
        <h2 className="card-title text-[#111] text-[20px] font-semibold font-work-sans">
          {product?.title}
        </h2>
        <p className="text-[#11111180] font-work-sans font-normal text-[20px]">
          {product?.price} ₹
        </p>
        <div className="w-full mt-6">
          <button className="btn text-white hover:bg-orange-400 bg-orange-500 text-[15px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
