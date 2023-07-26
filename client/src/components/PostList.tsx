import { getPosts } from "../redux/apicalls/otherApiCalls";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Skeleton from "./skeleton/Skeleton";
import Post from "./Post";
import PostFallback from "./post/PostFallback";

const PostList = () => {
  const [openPostID, setOpenPostID] = useState<string | null>(null);
  const [posts, setPosts] = useState([]);

  // Function to toggle the open post
  const toggleOpenPost = (postID: string) => {
    setOpenPostID((prevPostID) => (prevPostID === postID ? null : postID));
    console.log(openPostID);
  };

  // Query
  const { status, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  }) as any;

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
  }, [data]);

  if (status === "loading") {
    return <Skeleton />;
  }
  if (!posts) {
    return <PostFallback />;
  }
  return (
    <div className="col-span-2">
      {posts &&
        posts.map((post: any) => (
          <Post
            post={post}
            isOpen={openPostID === post.postID}
            toggleOpenPost={toggleOpenPost}
          />
        ))}
    </div>
  );
};

export default PostList;
