import { useMutation, useQueryClient } from "@tanstack/react-query";
import { savePost } from "../../redux/apicalls/otherApiCalls";
import { FormEvent, useState } from "react";

const CreatePost = () => {
  // const [imgUrl,setImgUrl] = useState("")
  const [content, setContent] = useState("");
  
  const queryClient = useQueryClient();
  
  const handleSavePostMutation = useMutation({
    mutationFn: () => savePost(content),
    onSuccess: () => {
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSavePost = (e: FormEvent) => {
    e.preventDefault();
    console.log(content);
    handleSavePostMutation.mutate();
  };

  return (
    <div>
      <form
        onSubmit={handleSavePost}
        className="border-2 bg-white mb-3  p-2 rounded-[10px]"
        action=""
      >
        <div className="flex ">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className=" rounded w-full p-3 focus:outline-none"
            value={content}
            name=""
            id=""
            cols={30}
            rows={1}
            placeholder="Write A new Post ..."
          ></textarea>
        </div>
        <div className="flex justify-between">
          <div></div>
          <button className="bg-green-500 rounded py-2 px-3 text-white">
            POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
