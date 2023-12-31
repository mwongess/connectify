import Recommendations from "./follows/Recommendations";
import FloatingBtn from "./buttons/FloatingBtn";
import CreatePost from "./post/CreatePost";
import PostList from "./PostList";

const Home = () => {
  return (
    <>
      <div className="sm:flex justify-between gap-2">
        <div className="p-3 sm:p-0 w-full sm:w-[70%]">
          <CreatePost />
          <PostList />
        </div>
        <div className="hidden sm:block w-[30%] rounded-[10px] h-fit bg-white p-3" >
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
