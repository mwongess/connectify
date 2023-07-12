import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/stateTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupFormData } from "../../types/formTypes";
import { ISignupPayload } from "../../types/userTypes";
import { signupSchema } from "../../schemas/signupSchema";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: ISignupPayload) => console.log(data);

  return (
    <div className="flex">
      <div className="w-[60%] bg-[#293145] min-h-screen"></div>
      <form
        className="flex flex-col items-center justify-center  w-[40%] gap-2 p-[7rem] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <h1 className="font-bold text-2xl">Signup</h1>
          <label htmlFor="">Username</label>
          <input
            className="bg-blue-100 border rounded-[50px]  p-2 w-full"
            {...register("userName")}
          />
          <p className="text-red-600">{errors.userName?.message}</p>
        </div>
        <div className="w-full">
          <label htmlFor="">Email</label>
          <input
            className="bg-blue-100 rounded-[50px]  p-2 w-full"
            {...register("email")}
          />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>

        <div className="w-full">
          <label htmlFor="">Password</label>
          <input
            className="bg-blue-100 border rounded-[50px]  p-2 w-full"
            {...register("password")}
          />
          <p className="text-red-600">{errors.password?.message}</p>
        </div>
        <div className="w-full">
          <label htmlFor="">Confirm Password</label>
          <input
            className="bg-blue-100 border rounded-[50px]  p-2 w-full"
            {...register("password")}
          />
          <p className="text-red-600">{errors.password?.message}</p>
        </div>
        <button className="bg-blue-800 text-white rounded-[10px] w-full p-2">
          Sign Up
        </button>
        <p>Continue with</p>
        <div className="flex justify-between gap-2 w-full">
          <button className="flex items-center gap-3 border w-[50%] p-2 rounded-[10px]">
            <img className=" w-[1rem] " src="/google.png" alt="" />
            Google
          </button>
          <button className="flex items-center gap-3 border w-[50%] p-2 rounded-[10px]">
            <FaFacebookF className="text-blue-800" />
            Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
