import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Post from "./Post";
import { getPosts } from "../redux/apicalls/otherApiCalls";
import Skeleton from "./skeleton/Skeleton";
// import CreatePost from "./post/CreatePost";
// import PostList from "./post/PostList";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  // Access the client
  // Queries
  const { status, data } = useQuery({ queryKey: ["posts"], queryFn: getPosts}) as any

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
    
  }, [data]);
  if (status === "loading") {
    return <Skeleton/>;
  }
  return (
    <div className="col-span-2">
      {/* <PostList/> */}
      {/* <CreatePost/> */}
      {posts && posts.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  );
};

export default PostList;
