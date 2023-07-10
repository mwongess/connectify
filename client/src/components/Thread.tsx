import {FaRegComment, FaRegHeart, FaRegShareSquare} from "react-icons/fa";

const Thread = () => {
  return (
    <div className="flex gap-2 border border-blue-300 rounded p-3 my-2 text-lg">
      <div>
        <img className=" h-[3rem] w-[3rem] rounded-full " src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYm9yZ2hpbml8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
      </div>
      <div>
        <div className="cursor-pointer hover:underline hover:text-blue-400">
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
