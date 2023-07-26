// import Recommendations from "../follows/Recommendations";
// import NewsFeed from "../NewsFeed";
import { useQuery } from "@tanstack/react-query";
import Intro from "./Intro";
import { getOneUser } from "../../redux/apicalls/otherApiCalls";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState("")

  const {data} = useQuery({
    queryKey: ["user"],
    queryFn: ()=>getOneUser(userName),
  })

 
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
        <div className="p-3 inline-block  translate-y-[-20%]">
          <img
            className="rounded-full h-[10rem] w-[10rem] sm:h-[13.5rem] sm:w-[13.5rem] object-fit border border-blue-500 "
            src={ data?.profileUrl || "https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"}
            alt=""
          />
          <h1 className="text-2xl">{data?.user[0].fullName || "Full Name"}</h1>
          <p className="text-[#4e5d78]">{data?.user[0].proffession || "Proffession"}</p>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <Intro data={data}/>
            {/* <NewsFeed /> */}
            <div></div>
            {/* <Recommendations /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
