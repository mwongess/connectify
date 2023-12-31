import CommentList from "./comments/CommentList";
import ThreadOptions from "./ThreadOptions";
import { useNavigate } from "react-router-dom";

const Post = ({
  post,
  isOpen,
  toggleOpenPost,
}: {
  post: {
    userID: string;
    userName: string;
    fullName: string
    postID: string;
    content: string;
    postLikesCount: string;
    isLikedByUser: 1 | 0
  };
  isOpen: boolean;
  toggleOpenPost: (postID: string) => void;
}) => {
  console.log(post);

  const navigate = useNavigate();

  return (
    <div className="flex gap-2 bg-white rounded-[10px] p-3 mb-4 text-lg select-none">
      <div>
        <img
          className=" h-[3rem] w-[3rem] rounded-full "
          src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="cursor-pointer hover:underline hover:text-blue-400">
          <h1 onClick={() => navigate("/" + post.userID)}>{post.fullName}</h1>
          <p>{post.userName}</p>
        </div>
        <div>
          <p>Hello</p>
          <p className="text-blue-400">@socket @node @react @ts</p>
          <p>{post.content}</p>
        </div>
        <div>
          {/* <img className="w-full object-cover" src="https://www.peerbits.com/static/91369e909293ae04560a158af8a8052c/c5b3e/benefits-of-reactjs-main-image.png" alt="" /> */}
        </div>
        <ThreadOptions
          toggleShowComments={() => toggleOpenPost(post.postID)}
          postID={post.postID}
          postLikesCount={post.postLikesCount}
          isLiked={post.isLikedByUser}
        />
        {isOpen && <CommentList postID={post.postID} />}
      </div>
    </div>
  );
};

export default Post;
