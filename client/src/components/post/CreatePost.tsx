const CreatePost = () => {
  return (
    <div>
      <form className="border-2 bg-white mb-3  p-2 rounded-[10px]" action="">
        <div className="flex ">
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
