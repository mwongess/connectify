// import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import CommentList from "./comments/CommentList";
import { useState } from "react";
import ThreadOptions from "./ThreadOptions";
import { useNavigate } from "react-router-dom";

const Post = ({post}: {post: {postID: string,content: string}}) => {
  const [showComments, setShowComments] = useState<boolean>(false);
    const navigate = useNavigate()
  const toggleShowComments = () => {
    setShowComments((prevState) => !prevState);
  };

  return (
    <div className="flex gap-2 bg-white rounded-[10px] p-3 mb-4 text-lg select-none">
      <div>
        <img
          className=" h-[3rem] w-[3rem] rounded-full "
          src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div>
        <div className="cursor-pointer hover:underline hover:text-blue-400">
          <h1 onClick={()=> navigate("/@mwongess")}>Amos Mwongela </h1>
          <p>@mwongess</p>
        </div>
        <div>
          <p>Hey</p>
          <p className="text-blue-400">@js @react</p>
          <p>
           {post.content}
          </p>
        </div>
        <div>
          <img className="w-full object-cover" src="https://www.peerbits.com/static/91369e909293ae04560a158af8a8052c/c5b3e/benefits-of-reactjs-main-image.png" alt="" />
        </div>
        <ThreadOptions toggleShowComments={toggleShowComments} />
        {showComments && <CommentList postID={post.postID} />}
      </div>
    </div>
  );
};

export default Post;
