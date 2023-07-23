import { useEffect, useState } from "react";
import { getThreads } from "../redux/apicalls/otherApiCalls";
import { useQuery } from "@tanstack/react-query";
import Post from "./Post";
// import CreatePost from "./post/CreatePost";
// import PostList from "./post/PostList";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  // Access the client
  // Queries
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getThreads }) as any

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, []);
  return (
    <div className="col-span-2">
      {/* <PostList/> */}
      {/* <CreatePost/> */}
      {posts.map((post) => (
        <Post/>
      ))}
    </div>
  );
};

export default PostList;
