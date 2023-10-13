import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupFormData } from "../../types/formTypes";
import { ISignupPayload } from "../../types/userTypes";
import { signupSchema } from "../../schemas/signupSchema";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signupUser } from "../../redux/apicalls/authApiCalls";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: ISignupPayload) => signupUser(data)

  return (
    <form
      className="sm:flex flex-col sm:items-center sm:justify-center  sm:w-[40%] w-full gap-6 sm:p-[3rem] p-[2rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <h1 className="font-bold text-3xl mb-6">Sign up</h1>

        <label className="font-bold" htmlFor="">Name<span className="text-red-600">*</span></label>
        <input
          className="border border-blue-600  p-2 w-full"
          {...register("name")}
          placeholder = "Your name"
        />
        <p className="text-red-600">{errors.name?.message}</p>
      </div>
      
      <div className="w-full">
        <label className="font-bold" htmlFor="">Email<span className="text-red-600">*</span></label>
        <input
          className="border border-blue-600 rounded  p-2 w-full"
          {...register("email")}
          placeholder="example@connectify.com"
        />
        <p className="text-red-600">{errors.email?.message}</p>
      </div>

      <div className="w-full">
        <label className="font-bold" htmlFor="">Password<span className="text-red-600">*</span></label>
        <input
          type="password"
          className=" border border-blue-600 rounded  p-2 w-full"
          {...register("password")}
          placeholder="********"
        />
        <p className="text-red-600">{errors.password?.message}</p>
      </div>
      
      <button className="bg-blue-800 text-white rounded w-full p-2 mt-2">
        Sign up
      </button>
      <p>Continue with</p>
      <div className="flex justify-between gap-2 w-full">
        <button className="flex items-center justify-center gap-3 border border-black w-[50%] p-2 rounded">
          <img className=" w-[1rem] " src="/google.png" alt="" />
          Google
        </button>
        <button className="flex items-center justify-center gap-3 border border-black w-[50%] p-2  rounded">
          <FaFacebookF className="text-blue-800" />
          Facebook
        </button>
      </div>
      <div className="w-full">
        <Link className="text-blue-700 text-lg underline" to="/auth/login">
          Sign in here
        </Link>
      </div>
    </form>
  );
};

export default Signup;
