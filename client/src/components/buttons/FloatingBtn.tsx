import { Link } from "react-router-dom";

const FloatingBtn = () => {
  return (
    <Link to="/">
      <button className="fixed bottom-6 right-6  h-[3.5rem] w-[3.5rem] text bg-blue-500 text-white rounded-full shadow-lg">
        +
      </button>
    </Link>
  );
};

export default FloatingBtn;
