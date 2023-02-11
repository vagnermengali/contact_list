import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/register";
import { useContext } from "react";
import { Context } from "@/context/userContext";
import Link from "next/link";

function FormRegister() {
    const { registerUser } = useContext(Context)

    interface DataRegister {
        username: string;
        avatar_url: string;
        email: string;
        password: string;
        confirm_password: string;
        telephone: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<DataRegister>({
        shouldFocusError: false,
        resolver: yupResolver(formSchema)
    });

    return (
        <Form onSubmit={handleSubmit(registerUser)}>
            <div className="container-input ">
                <label className={"label"}>Username</label>
                <input
                    type="text"
                    className="input-email"
                    placeholder="Your Username"
                    {...register("username")}
                />
            </div>
            {errors.username ? (
                <label className="error">{errors.username?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-input ">
                <label className="label">Email</label>
                <input
                    className="input-email"
                    type="text"
                    placeholder="Your Email"
                    {...register("email")}
                />
            </div>
            {errors.email ? (
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
            {errors.password ? (
                <label className="error">{errors.password?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-input ">
                <label className={"label"}>Telephone</label>
                <input
                    type="tel"
                    className="input-password"
                    placeholder="Your Telephone"
                    {...register("telephone")}
                />
            </div>
            {errors.telephone ? (
                <label className="error">{errors.telephone?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-input ">
                <label className={"label"}>Profile picture</label>
                <input
                    type="text"
                    className="input-password"
                    placeholder="Your Picture"
                    {...register("avatar_url")}
                />
            </div>
            {errors.avatar_url ? (
                <label className="error">{errors.avatar_url?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-button">
                <button type="submit" className="btn">
                    Register
                </button>
                <Link href="/login" className="link-signup">
                    Sign in
                </Link>
            </div>
        </Form>
    );
}

export default FormRegister;