import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../utils/authFns";
import { ILoginPayload } from "../../types/userTypes";
import { SigninFormData } from "../../types/formTypes";
import { signinSchema } from "../../schemas/signinSchema";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  // const userName = useSelector(
  //   (state: RootState) => state.user.details!.userName
  // );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data: ILoginPayload) => loginUser(data, navigate);

  return (
    <form
      className="sm:flex flex-col sm:items-center sm:justify-center  sm:w-[40%] w-full gap-2 sm:p-[7rem] p-[2rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <h1 className="font-bold text-2xl">Login</h1>
        <label htmlFor="">Username</label>
        <input
          className="border border-blue-600 rounded  p-2 w-full"
          {...register("userName")}
        />
        <p className="text-red-600">{errors.userName?.message}</p>
      </div>

      <div className="w-full">
        <label htmlFor="">Password</label>
        <input
          className="border border-blue-600 rounded  p-2 w-full"
          type="password"
          {...register("password")}
        />
        <p className="text-red-600">{errors.password?.message}</p>
      </div>
      <button className="bg-blue-800 text-white rounded w-full p-2 mt-3">
        Login
      </button>
      <p>Continue with</p>
      <div className="flex justify-between gap-2 w-full mt-2">
        <button className="flex items-center justify-center gap-3 border border-black w-[50%] p-2 rounded">
          <img className=" w-[1rem] " src="/google.png" alt="" />
          Google
        </button>
        <button className="flex items-center  justify-center gap-3 border border-black w-[50%] p-2  rounded">
          <FaFacebookF className="text-blue-800" />
          Facebook
        </button>
      </div>
      <div className="w-full">
        <Link className="text-blue-700 text-lg underline" to="/auth/signup">
          Signup here
        </Link>
      </div>
    </form>
  );
};

export default Signin;
