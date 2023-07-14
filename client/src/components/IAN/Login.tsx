import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="flex flex-col items-center" action="">
        <div className="flex flex-col gap-3 w-[25%]">
          <div>
            <h1 className="font-bold">Login in SmartBuy</h1>
          </div>
          <div>
            <h1>Email</h1>
            <input className="border w-full p-2 rounded" type="text" placeholder="Enter Your Email Here" />
          </div>
          <div>
            <h1>Password</h1>
            <input className="border w-full p-2 rounded" type="text" placeholder="Enter Your Password Here" />
          </div>
          <button className="bg-blue-800 text-white rounded p-3 w-full">Login</button>
          <p className="font-bold">Dont have an account yet?<Link className="text-blue-500 text underline" to="signup">Sign up here</Link> </p>
        </div >
      </form>
    </div>
  );
};

export default Login;
