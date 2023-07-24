import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";

const ThreadOptions = ({
  toggleShowComments,
}: {
  toggleShowComments: () => void;
}) => {
  return (
    <div className="flex gap-8 my-3 border-t pt-4 pb-2">
      <FaRegHeart className="cursor-pointer" />
      <FaRegComment className="cursor-pointer" onClick={toggleShowComments} />
      <FaRegShareSquare className="cursor-pointer" />
    </div>
  );
};

export default ThreadOptions;
