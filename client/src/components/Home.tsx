import { Link } from "react-router-dom";
import NewsFeed from "./NewsFeed";
import Recommendations from "./follows/Recommendations";
import FloatingBtn from "./buttons/FloatingBtn";

const Home = () => {
  return (
    <>
      <h1 className="font-bold ">Home</h1>
      <div className="flex justify-between gap-2">
        <div className="w-[70%]">
          <NewsFeed />
        </div>
        <div className="w-[30%] mt-2">
          <input
            className="border border-blue-500 w-full rounded p-2 bg-transparent"
            type="search"
            placeholder="Search posts"
          />
          <h1 className="font-bold my-2">Recomendations & Top</h1>
          <Recommendations />
        </div>
      </div>
      <FloatingBtn />
    </>
  );
};

export default Home;
