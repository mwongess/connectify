import NewsFeed from "./NewsFeed";
import Recommendations from "./follows/Recommendations";

const Home = () => {
  return (
    <div className="flex justify-between gap-2">
      <div className="w-[70%]">
        <NewsFeed />
      </div>
      <div className="w-[30%] mt-2">
        <input className="border w-full rounded p-2" type="search" placeholder="Search posts"/>
        <h1 className="font-bold my-2">Recomendations & Top</h1>
        <Recommendations />
      </div>
    </div>
  );
};

export default Home;
