import { useQuery } from "@tanstack/react-query";
import Follower from "./Follower";
import { getFollowers } from "../../utils/otherFns";
import { useEffect, useState } from "react";
import FollowersFallback from "./FollowersFallback";

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
      {!followers[0] && <FollowersFallback/>}
      {followers[0] && followers.map((follower) => <Follower follower={follower} />)}
    </>
  );
};

export default Followers;
