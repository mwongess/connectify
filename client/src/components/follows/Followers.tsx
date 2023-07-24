import { useQuery } from "@tanstack/react-query";
import Follower from "./Follower";
import { getFollowers } from "../../redux/apicalls/otherApiCalls";
import { useEffect, useState } from "react";

const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const { data } = useQuery({
    queryKey: ["followers"],
    queryFn: getFollowers,
  }) as any;
  useEffect(() => {
    if (data?.friends) {
      setFollowers(data?.friends);
      console.log(data);
    }
    console.log(followers);
  }, [data]);
  return (
    <>
      {!followers[0] && <h1>You have no friends yet</h1>}
      {followers[0] && followers.map((follower) => <Follower follower={follower} />)}
    </>
  );
};

export default Followers;
