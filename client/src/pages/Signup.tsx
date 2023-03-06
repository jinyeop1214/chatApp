import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Inputs = {
	email: string;
	password: string;
	nickname: string;
};

const Signup = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div>
			<form>
				<TextField
					id="filled-basic"
					label="Email Address"
					variant="filled"
					{...register("email", { required: true })}
				/>
				{errors.email && <span>빈칸을 채워주세요.</span>}
				<TextField
					id="filled-basic"
					label="Password"
					variant="filled"
					{...register("password", { required: true })}
				/>
				{errors.password && <span>빈칸을 채워주세요.</span>}
				<TextField
					id="filled-basic"
					label="Nickname"
					variant="filled"
					{...register("nickname", { required: true })}
				/>
				{errors.password && <span>빈칸을 채워주세요.</span>}
				<Button variant="contained" onClick={handleSubmit(onSubmit)}>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default Signup;
