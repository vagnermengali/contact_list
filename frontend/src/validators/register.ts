import *  as  yup from "yup"

export const formSchema = yup.object().shape({
    username: yup.string()
    .required("Campo obrigatório")
    .min(6, "O nome deve ter pelo menos 6 caracteres")
    .max(25, "O nome deve ter no máximo 25 caracteres")
    .matches((/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/),"O nome deve conter apenas letras."),

    email: yup.string()
    .required("Campo obrigatório")
    .email("E-mail inválido")
    .matches((/^[a-z0-9_.]+@[a-z]+.([a-z]+)$/),"Verifique seu e-mail"),

    password: yup.string()
    .required("Campo obrigatório")
    .min(4, "A senha deve conter pelo menos 4 caracteres")
    .max(20, "A senha deve conter no máximo 20 caracteres")
    .matches((/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),"A senha deve conter deve conter letras minúsculas e maiúsculas, números e carácteres especais"),

    telephone: yup.string()
    .required("Campo obrigatório")
    .matches((/^\+\d{2,3} \d{2} \d{8,9}$.*$/),"O número deve seguir o modelo exibido Ex: +12 34 567890123"),

    avatar_url: yup.string().url()
    .required("Campo obrigatório")
    .matches((/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?(\.(jpeg|jpg|png))$/),
    "Verique se a URL é valida e se segue os formatos jpeg, jpg e png"),
});