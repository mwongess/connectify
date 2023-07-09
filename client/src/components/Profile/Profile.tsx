import NewsFeed from "../NewsFeed";
import Follow from "../follows/Follow";
import Recommendations from "../follows/Recommendations";
import Intro from "./Intro";

const Profile = () => {
  return (
    <div className="">
      <div className="relative m-0 p-0 ">
        <div className="h-[200px] rounded border-3 border-red-500 ">
          <img
            className="w-full h-full object-fill rounded-t-[5px] "
            src="https://media.licdn.com/dms/image/D4D16AQGArGMNuJChVg/profile-displaybackgroundimage-shrink_350_1400/0/1686639070399?e=1694649600&v=beta&t=95lN6nh9GFiUTUDlJLCN2m16-FOMq1CAns53MZS-VYc"
            alt=""
          />
        </div>
        <div className="p-3 inline-block  translate-y-[-10%]">
          <img
            className="rounded-full border border-blue-500 "
            src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c "
            alt=""
          />
          <h1 className="text-2xl">Amos Mwongela</h1>
          <p className="text-[#4e5d78]">Software Engineer</p>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <Intro />
            <NewsFeed />
            <Recommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
