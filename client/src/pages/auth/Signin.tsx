import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/stateTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../../redux/apicalls/authApiCalls";
import { ILoginPayload } from "../../types/userTypes";
import { SigninFormData } from "../../types/formTypes";
import { signinSchema } from "../../schemas/signinSchema";

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
      <div className="w-[50%] bg-[#293145] h-screen"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input className="border" {...register("userName")} />
          <p>{errors.userName?.message}</p>
        </div>

        <div>
          <input className="border" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
