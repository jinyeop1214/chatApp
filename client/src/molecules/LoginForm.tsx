import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Blank from "../atoms/Blank";

type Inputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form>
			<input
				id="filled-basic"
				placeholder="Email Address"
				{...register("email", { required: true })}
			/>
			{errors.email && <Blank />}
			<input
				id="filled-basic"
				placeholder="Password"
				{...register("password", { required: true })}
			/>
			{errors.password && <Blank />}
			<button onClick={handleSubmit(onSubmit)}>로그인</button>
		</form>
	);
};

export default LoginForm;
