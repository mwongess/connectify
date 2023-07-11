import { FaPenAlt, FaPenSquare } from "react-icons/fa";

const CreatePost = () => {
  return (
    <div>
      <form className="border-2 border-green-200 p-2 rounded" action="">
        <div className="flex ">
          <p className="border-2 border-green-400 rounded-full p-1 h-[2rem]">
            {/* <FaPenAlt className="text-green-500  text-xl " /> */}
          </p>
          <textarea
            className=" rounded w-full p-3 focus:outline-none"
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
