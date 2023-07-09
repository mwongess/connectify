import {FaRegComment, FaRegHeart, FaRegShareSquare} from "react-icons/fa";

const Thread = () => {
  return (
    <div className="flex gap-2 border border-blue-300 rounded p-3 my-2 text-lg">
      <div>
        <img className="rounded-full bg-blue-300 p-1" src="vite.svg" alt="" />
      </div>
      <div>
        <div>
          <h1>Amos Mwongea </h1>
          <p>@mwongess</p>
        </div>
        <div>
          <p>Hey</p>
          <p className="text-blue-400">@js @react</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            vero.
          </p>
        </div>
        <div className="flex gap-5 mt-2">
          <FaRegComment className="cursor-pointer"/>
          <FaRegHeart className="cursor-pointer"/>
          <FaRegShareSquare className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Thread;
