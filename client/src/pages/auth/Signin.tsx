import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/stateTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../redux/apicalls/authApiCalls";
import { ILoginPayload } from "../../types/userTypes";
import { SigninFormData } from "../../types/formTypes";
import { signinSchema } from "../../schemas/signinSchema";
import { FaFacebookF } from "react-icons/fa";

const Signin = () => {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state: RootState) => state.user.details!.userName
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data: ILoginPayload) => loginUser(dispatch, data);

  return (
    <div className="flex">
      <div className="relative auth w-[60%] bg-[url(/auth-left.png)] bg-center bg-no-repeat bg-cover min-h-screen">
        <div className="absolute top-0 left-0 w-full h-full bg-[#293145] bg-opacity-90"></div>
      </div>
      <form
        className="flex flex-col items-center justify-center  w-[40%] gap-2 p-[7rem] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <h1 className="font-bold text-2xl">Login</h1>
          <label htmlFor="">Username</label>
          <input
            className="bg-blue-100 border rounded-[50px]  p-2 w-full"
            {...register("userName")}
          />
          <p className="text-red-600">{errors.userName?.message}</p>
        </div>

        <div className="w-full">
          <label htmlFor="">Password</label>
          <input
            className="bg-blue-100 border rounded-[50px]  p-2 w-full"
            {...register("password")}
          />
          <p className="text-red-600">{errors.password?.message}</p>
        </div>
        <button className="bg-blue-800 text-white rounded-[10px] w-full p-2">
          Login
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

export default Signin;
