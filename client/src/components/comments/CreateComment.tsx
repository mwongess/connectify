import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { saveComment } from "../../redux/apicalls/otherApiCalls";

const CreateComment = ({ postID }: { postID: string }) => {
  const [canPost, setCanPost] = useState<boolean>(false);
  const [commentText, setCommentText] = useState("");

  const queryClient = useQueryClient();

  const handleCanPost = (e: any) => {
    setCommentText(e.target.value);
    if (e.target.value) {
      setCanPost(true);
      return;
    }
    setCanPost(false);
  };

  const saveCommentMutation = useMutation({
    mutationFn: () => saveComment(postID, commentText),
    onSuccess: () => {
      setCommentText("");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  const handleSubmitComment = (e: any) => {
    e.preventDefault();
    if (canPost && commentText) {
      saveCommentMutation.mutate();
    }
  };
  return (
    <div className="my-2">
      <form className="" onSubmit={handleSubmitComment}>
        <div className="flex gap-2">
          <img
            className="h-[2.5rem] rounded-full"
            src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c"
            alt=""
          />
          <div className="block w-full">
            <input
              className="border-2 border-blue-400 rounded-[50px] w-full h-[2.5rem] p-3"
              type="text"
              value={commentText}
              placeholder="Add a comment ..."
              onChange={handleCanPost}
            />
            {canPost && (
              <button className="bg-blue-500 px-5 py-1 rounded-[50px] text-white mt-2">
                Post
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
