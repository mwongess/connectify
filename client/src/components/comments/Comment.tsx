import { Link } from "react-router-dom";

const Comment = ({ comment }: { comment: { commentID: string,commentText: string} }) => {
  return (
    <div className="mt-3">
      <div className="flex  gap-2">
        <img
          className="h-[2rem] rounded-full"
          src="https://uploads-ssl.webflow.com/5e30313b9d703b5281c5bfeb/5e35a1517c077b7e6edcb164_AJ_Logo.svg"
          alt=""
        />
        <div className="bg-blue-100 rounded-[10px] p-3 w-full">
          <Link to="" className="hover:underline hover:text-blue-500">
            Amos Mwongela
          </Link>
          <p className="cursor-pointer">Software Engineer</p>
          <p>
           {comment.commentText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
