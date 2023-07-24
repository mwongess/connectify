import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { getPostComments } from "../../redux/apicalls/otherApiCalls";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

const CommentList = ({ postID }: { postID: string }) => {
  const [comments, setComments] = useState([]);

  const { status, data } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getPostComments(postID),
  }) as any;

  useEffect(() => {
    if (data?.comments) {
      setComments(data.comments);
    } else {
      setComments([]);
    }
  }, [data]);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <div>
      <CreateComment postID={postID} />
      {comments[0] && comments.map((comment) => <Comment comment={comment} />)}
    </div>
  );
};

export default CommentList;
