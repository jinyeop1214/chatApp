import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Blank from "../atoms/Blank";

type Inputs = {
	email: string;
	password: string;
	nickname: string;
};

const SignupForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form>
			<TextField
				id="filled-basic"
				label="Email Address"
				variant="filled"
				{...register("email", { required: true })}
			/>
			{errors.email && <Blank />}
			<TextField
				id="filled-basic"
				label="Password"
				variant="filled"
				{...register("password", { required: true })}
			/>
			{errors.password && <Blank />}
			<TextField
				id="filled-basic"
				label="Nickname"
				variant="filled"
				{...register("nickname", { required: true })}
			/>
			{errors.nickname && <Blank />}
			<Button variant="contained" onClick={handleSubmit(onSubmit)}>
				회원 가입
			</Button>
		</form>
	);
};

export default SignupForm;
