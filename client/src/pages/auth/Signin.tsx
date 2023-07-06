import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../types/stateTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "../../types/formtypes";
import { loginUser } from "../../redux/apicalls/authApiCalls";
import { Signinschema } from "../../schemas/signinSchema";

const Signin = () => {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state: RootState) => state.user.details!.userName
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(Signinschema),
  });

  const onSubmit = (data: FormData) =>loginUser(dispatch, data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("userName")} />
        <p>{errors.userName?.message}</p>
      </div>

      <div>
        <input {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>

      <input type="submit" />
    </form>
  );
};

export default Signin;
