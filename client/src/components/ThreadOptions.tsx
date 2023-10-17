import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import { likeOrUnlike } from "../utils/otherFns";

const ThreadOptions = ({
  postID,
  toggleShowComments,
  postLikesCount,
  isLiked,
}: {
  postID: string;
  toggleShowComments: () => void;
  postLikesCount: string;
  isLiked: 1 | 0;
}) => {
  const queryClient = useQueryClient();

  const likeOrUnlikeMutation = useMutation({
    mutationFn: (postID:string)=> likeOrUnlike(postID),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const handleLikeOrUnlike = (postID: string) => {
    console.log(postID)
    likeOrUnlikeMutation.mutate(postID);
  };
  return (
    <div className="flex items-center gap-8 my-3 border-t pt-4 pb-2">
      <div className="flex items-center gap-2">
        <FaRegHeart
          onClick={() => handleLikeOrUnlike(postID)}
          className={isLiked == 1 ? "text-red-700" : " " + "cursor-pointer"}
        />
        <p>{postLikesCount || 0} Like(s)</p>
      </div>
      <FaRegComment className="cursor-pointer" onClick={toggleShowComments} />
      <FaRegShareSquare className="cursor-pointer" />
    </div>
  );
};

export default ThreadOptions;
