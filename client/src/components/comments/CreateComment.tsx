import { useState } from "react";

const CreateComment = () => {
  const [canPost, setCanPost] = useState<boolean>(false);

  const handleCanPost = (e:any) => {
    if (e.target.value.length >= 3) {
      setCanPost(true);
      return;
    }
    setCanPost(false);
  };
  return (
    <div className="my-2">
      <form className="" action="">
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
