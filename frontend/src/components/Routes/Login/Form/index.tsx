import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/login";
import { useContext } from "react";
import { Context } from "@/context/userContext";
import Link from "next/link";

function FormLogin() {
    const { loginUser } = useContext(Context)

    interface DataLogin {
        email: string;
        password: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DataLogin>({
        shouldFocusError: false,
        resolver: yupResolver(formSchema)
    });

    return (
        <Form onSubmit={handleSubmit(loginUser)}>
            <div className="container-input ">
                <label className="label">Email</label>
                <input
                    className="input-email"
                    type="text"
                    placeholder="Your Email"
                    {...register("email")}
                />
            </div>
            {errors.password ? (
                <label className="error">{errors.email?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-input ">
                <label className={"label"}>Password</label>
                <input
                    type="password"
                    className="input-password"
                    placeholder="Your Password"
                    {...register("password")}
                />
            </div>
            <label className={errors.password ? "error" : "no-error"}>
                {errors.password?.message}
            </label>
            <a
                className="link"
                onClick={() => alert("make modal to proceed")}
            >
                Forgot your password?
            </a>
            <div className="container-button">
                <button type="submit" className="btn">
                    Log in
                </button>
                <Link href="/register" className="link-signup">
                    Sign up
                </Link>
            </div>
        </Form>
    );
}

export default FormLogin;