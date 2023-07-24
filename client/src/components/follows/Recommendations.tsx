import { useQuery } from "@tanstack/react-query";
import Follow from "./Follow";
import { getAllUsers } from "../../redux/apicalls/otherApiCalls";
import { useEffect, useState } from "react";
import FollowSkeleton from "../skeleton/FollowSkeleton";

const Recommendations = () => {
  const [users, setUsers] = useState([]);
  const { status, data } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  }) as any;
  useEffect(() => {
    if (data) {
      setUsers(data.users);
    }
  }, [data]);
  if (status === "loading") {
    return <FollowSkeleton />;
  }
  return (
    <div className="">
      {users?.map((user) => (
        <Follow user={user} />
      ))}
    </div>
  );
};

export default Recommendations;
