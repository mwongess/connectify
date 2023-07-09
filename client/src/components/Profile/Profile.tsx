import NewsFeed from "../NewsFeed";
import Follow from "../follows/Follow";
import Recommendations from "../follows/Recommendations";
import Intro from "./Intro"

const Profile = () => {
  return (
    <div className="">
      <div className="border border-blue-400 rounded">
        <div>
          <img className="w-full h-[150px]" src="vite.svg" alt="" />
        </div>
        <div className="p-3">
          <img className="rounded-full border w-[15%]" src="vite.svg " alt="" />
          <h1 className="text-2xl">Amos Mwongela</h1>
          <p className="text-[#4e5d78]">Software Engineer</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-2">
        <Intro/>
        <NewsFeed/>
        <Recommendations/>
      </div>
    </div>
  );
};

export default Profile;
