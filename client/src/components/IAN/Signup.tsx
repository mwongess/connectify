const Signup = () => {
  return (
    <div>
      <form className="flex flex-col sm:items-center p-2" action="">
        <div className="flex flex-col gap-3 sm:w-[25%]">
          <p>Create Your Account</p>
          <input className="border border-black"   type="text " name="" id="" />
          <input  className="border border-black" type="text" name="" id="" />
          <input className="border border-black"  type="text" name="" id="" />
          <button className="bg-blue-800 text-white rounded p-3 w-full">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
