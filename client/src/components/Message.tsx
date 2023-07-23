import { Link } from "react-router-dom";

const Message = ({userID}: any) => {
  return (
    <Link to={userID} className="flex  items-center justify-between gap-4 border rounded bg-blue-50 p-2 cursor-pointer ">
      <div className="flex items-center gap-4">
        <img className="rounded-full p-1 h-[3.5rem]" src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c" alt="" />
        <div>
          <p>Amos Mwongela</p>
          <p>Thanks buddy ...</p>
        </div>
      </div>

      <div>
        <p>Just Now</p>
      </div>
    </Link>
  );
};

export default Message;
