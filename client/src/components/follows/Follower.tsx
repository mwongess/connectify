import MessageBtn from "../buttons/MessageBtn";

const Follower = ({ follower }: any) => {
  return (
    <div className="flex justify-between items-center mb-3 border-b p-2">
      <div className="flex items-center gap-3">
        <img
          className="h-[3rem] rounded-full"
          src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c"
          alt=""
        />
        <div className="">
          <h1>{follower.name}</h1>
          <p>{follower.userName}</p>
        </div>
      </div>
      <MessageBtn />
    </div>
  );
};

export default Follower;
