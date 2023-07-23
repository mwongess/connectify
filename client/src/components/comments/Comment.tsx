import { Link } from "react-router-dom";

const Comment = ({ comment }: { comment: { commentID: string,commentText: string} }) => {
  return (
    <div className="mt-3">
      <div className="flex  gap-2">
        <img
          className="h-[2.5rem] rounded-full"
          src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c"
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
