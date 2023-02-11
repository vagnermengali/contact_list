import { Form } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/contact";
import { useContext } from "react";
import { Context as ContextUser } from "@/context/userContext";
import Link from "next/link";

function FormContactEdit() {
    const { patchContact } = useContext(ContextUser)

    interface DataContact {
        name: string;
        email: string;
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
        <Form onSubmit={handleSubmit(patchContact)}>
            <div className="container-input ">
                <label className="label">Name</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter the name"
                    {...register("name")}
                />
            </div>
            {errors.name ? (
                <label className="error">{errors.name?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-input ">
                <label className="label">Email</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter the email"
                    {...register("email")}
                />
            </div>
            {errors.email ? (
                <label className="error">{errors.email?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-input ">
                <label className="label">Telephone</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Enter the telephone"
                    {...register("telephone")}
                />
            </div>
            {errors.telephone ? (
                <label className="error">{errors.telephone?.message}</label>
            ) : (
                <label className="no-error">ㅤ</label>
            )}
            <div className="container-button">
                <button type="submit" className="btn">
                    To add
                </button>
            </div>
        </Form>
    );
}

export default FormContactEdit;