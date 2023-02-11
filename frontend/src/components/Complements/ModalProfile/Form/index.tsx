import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/register";
import { useContext } from "react";
import { Context as ContextUser } from "@/context/userContext";
import Link from "next/link";

function FormContactEdit() {
    const { patchUser, deleteUser } = useContext(ContextUser)

    interface DataContact {
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
    } = useForm<DataContact>({
        shouldFocusError: false,
        resolver: yupResolver(formSchema)
    });

    return (
            <Form onSubmit={handleSubmit(patchUser)}>
                <div className="container-input ">
                    <label className={"label"}>Username</label>
                    <input
                        type="text"
                        className="input"
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
                        className="input"
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
                        className="input"
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
                        className="input"
                        placeholder="Your Password"
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
                        className="input"
                        placeholder="Your Password"
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
                        Conclude
                    </button>
                </div>
            </Form>
    );
}

export default FormContactEdit;