import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupFormData } from "../../types/formTypes";
import { ISignupPayload } from "../../types/userTypes";
import { signupSchema } from "../../schemas/signupSchema";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: ISignupPayload) => console.log(data);

  return (
    <form
      className="sm:flex flex-col sm:items-center sm:justify-center  sm:w-[40%] w-full gap-2 sm:p-[7rem] p-[2rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <h1 className="font-bold text-2xl">Signup</h1>
        <label htmlFor="">Username</label>
        <input
          className="border border-blue-600 rounded  p-2 w-full"
          {...register("userName")}
        />
        <p className="text-red-600">{errors.userName?.message}</p>
      </div>
      <div className="w-full">
        <label htmlFor="">Email</label>
        <input
          className="border border-blue-600 rounded  p-2 w-full"
          {...register("email")}
        />
        <p className="text-red-600">{errors.email?.message}</p>
      </div>

      <div className="w-full">
        <label htmlFor="">Password</label>
        <input
          className=" border border-blue-600 rounded  p-2 w-full"
          {...register("password")}
        />
        <p className="text-red-600">{errors.password?.message}</p>
      </div>
      <div className="w-full">
        <label htmlFor="">Confirm Password</label>
        <input
          className="border border-blue-600 rounded p-2 w-full"
          type="password"
          {...register("password")}
        />
        <p className="text-red-600">{errors.password?.message}</p>
      </div>
      <button className="bg-blue-800 text-white rounded w-full p-2 mt-2">
        Sign Up
      </button>
      <p>Continue with</p>
      <div className="flex justify-between gap-2 w-full">
        <button className="flex items-center gap-3 border border-black w-[50%] p-2 rounded">
          <img className=" w-[1rem] " src="/google.png" alt="" />
          Google
        </button>
        <button className="flex items-center gap-3 border border-black w-[50%] p-2  rounded">
          <FaFacebookF className="text-blue-800" />
          Facebook
        </button>
      </div>
      <div className="border w-full">
        <Link className="text-blue-700 text-lg underline" to="/auth/login">
          Sign in here
        </Link>
      </div>
    </form>
  );
};

export default Signup;
