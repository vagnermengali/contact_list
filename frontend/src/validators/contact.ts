import *  as  yup from "yup"

export const formSchema = yup.object().shape({
    name: yup.string()
        .required("Campo obrigatório")
        .min(6, "O nome deve ter pelo menos 6 caracteres")
        .max(25, "O nome deve ter no máximo 25 caracteres")
        .matches((/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/), "O nome deve conter apenas letras."),

    email: yup.string()
        .required("Campo obrigatório")
        .email("E-mail inválido")
        .max(50, "O email deve ter no máximo 50 caracteres")
        .matches((/^[a-z0-9_.]+@[a-z]+.([a-z]+)$/), "Verifique seu e-mail"),

    telephone: yup.string()
        .required("Campo obrigatório")
        .matches((/^\+\d{2,3} \d{2} \d{8,9}$.*$/), "O número deve seguir o modelo exibido Ex: +12 34 567890123"),
});