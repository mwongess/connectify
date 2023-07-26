import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";

const ThreadOptions = ({
  toggleShowComments,
  postLikesCount
}: {
  toggleShowComments: () => void;
  postLikesCount:string
}) => {
 
  return (
    <div className="flex items-center gap-8 my-3 border-t pt-4 pb-2">
      <div className="flex items-center gap-2">
        <FaRegHeart className="cursor-pointer" />
        <p>{postLikesCount || 0} Likes</p>
      </div>
      <FaRegComment className="cursor-pointer" onClick={toggleShowComments} />
      <FaRegShareSquare className="cursor-pointer" />
    </div>
  );
};

export default ThreadOptions;
