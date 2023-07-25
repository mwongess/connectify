import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";

const ThreadOptions = ({
  toggleShowComments,
}: {
  toggleShowComments: () => void;
}) => {
 
  return (
    <div className="flex items-center gap-8 my-3 border-t pt-4 pb-2">
      <div className="flex items-center gap-2">
        <FaRegHeart className="cursor-pointer" />
        {/* <p>{dataLikeCount}</p> */}
      </div>
      <FaRegComment className="cursor-pointer" onClick={toggleShowComments} />
      <FaRegShareSquare className="cursor-pointer" />
    </div>
  );
};

export default ThreadOptions;
