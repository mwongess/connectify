import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/stateTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupFormData } from "../../types/formTypes";
import { ISignupPayload } from "../../types/userTypes";
import { signupSchema } from "../../schemas/signupSchema";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("userName")} />
        <p>{errors.userName?.message}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <input type="submit" />
      </form>
      <div>
        <input {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>

      <input type="submit" />
    </form>
  );
};

export default Signup;
