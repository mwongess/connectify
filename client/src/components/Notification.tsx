import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="flex gap-3 bg-blue-200 border-b items-center rounded p-1">
      <img className="h-[3rem] rounded-full" src="https://media.licdn.com/dms/image/C4D03AQELuT887ddBjA/profile-displayphoto-shrink_200_200/0/1657864494797?e=1694649600&v=beta&t=8AnzqZSKdNKTTFanSEf6k1Qpe9kYGJXcvuELsPkiI_c" alt="" />
      <div>
        <p>
          <Link className="underline text-blue-600" to="">Amos Mwongela</Link>, Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae, rem!
        </p>
      </div>
    </div>
  );
};

export default Notification;
