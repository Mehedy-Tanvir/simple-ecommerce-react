import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-[1400px] pb-10 min-h-screen gap-6">
      <div className="flex items-center justify-center">
        {/* error page image here */}
        <img className="max-h-[400px]" src="/404-error.gif" alt="image" />
      </div>
      <h1 className="text-4xl font-bold text-center text-[#0B0B0BB3]">
        Error 404! Page not found!
      </h1>
      {/* returning to home button here */}
      <Link to="/">
        <button className="bg-blue-500 hover:opacity-90 text-white text-2xl font-semibold h-[60px] px-[20px] rounded-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
