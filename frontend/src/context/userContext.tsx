import { NextRouter, useRouter } from 'next/router'
import { useState, createContext, ReactNode, Dispatch, SetStateAction, useEffect, useContext } from 'react';
import Api from "@/services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context as ContextPage } from "@/context/pageContext";

export const Context = createContext<IContext>({} as IContext)

interface IUserProvider {
    children: ReactNode
}

interface IContext {
    notifyLoginSuccess?: (test: string) => void;
    notifyLoginError?: (test: string) => void;
    notifyLoginWarn?: (test: string) => void;
    registerUser: (data: UserDataRegister) => void;
    loginUser: (data: UserDataLogin) => void;
    router: NextRouter;
    listContact: Contacts[];
    setListContact: Dispatch<SetStateAction<Contacts[]>>
    contactPdf: Contacts[];
    setContactPdf: Dispatch<SetStateAction<Contacts[]>>
    user: User;
    registerContact: (data: ContactDataRegister) => void;
    deleteContact: (id: string) => void
    patchContact: (data: ContactDataPatch) => void
    deleteUser: () => void;
    patchUser: (data: UserDataPatch) => void
}

interface UserDataLogin {
    email: string,
    password: string,
}

interface LoginResponse {
    user: {
        id: string,
        username: string,
        avatar_url: string,
        email: string,
        telephone: string,
        created_at: string,
        updated_at: string,
    },
    token: string;
}

interface UserDataPatch {
    username?: string,
    avatar_url?: string,
    email?: string,
    password?: string,
    telephone?: string,
}

interface UserDataRegister {
    username: string,
    avatar_url: string,
    email: string,
    password: string,
    telephone: string,
}

interface ContactDataRegister {
    name: string,
    email: string,
    telephone: string,
}

interface RegisterResponse {
    id: string,
    username: string,
    avatar_url: string,
    email: string,
    telephone: string,
    created_at: string,
    updated_at: string,
}

interface User {
    id: string,
    username: string,
    avatar_url: string,
    email: string,
    telephone: string,
    created_at: string,
    updated_at: string,
}

interface UserResponse {
    id: string,
    username: string,
    avatar_url: string,
    email: string,
    telephone: string,
    created_at: string,
    updated_at: string,
    contacts: []
}

interface ContactDataPatch {
    name?: string,
    email?: string,
    telephone?: string,
}
export interface Contacts {
    id: string,
    name: string,
    email: string,
    telephone: string,
    userId: string,
    created_at: string,
    updated_at: string,
}

export interface ContactResponse {
    data: Contacts[];
}

const UserProvider = ({ children }: IUserProvider) => {
    const { closeDropdownContact, contact, closeDropdownContactEdit, closeDropdownProfile } = useContext(ContextPage)

    const notifyLoginSuccess = (text: string, id: string) => toast.success(text, { toastId: id });
    const notifyLoginError = (text: string, id: string) => toast.error(text, { toastId: id });
    const notifyLoginWarn = (text: string, id: string) => toast.warn(text, { toastId: id });
    const [listContact, setListContact] = useState<Contacts[]>([] as Contacts[]);
    const [contactPdf, setContactPdf] = useState<Contacts[]>([] as Contacts[]);
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<User>({} as User);
    const router = useRouter();

    useEffect(() => {
        const ghaia_tkn = window.localStorage.getItem("ghaia-tkn");
        if (ghaia_tkn && ghaia_tkn.length > 0) {
            router.push('dashboard')
            setToken(ghaia_tkn)
        } else {
            router.push("/");
        }
    }, []);

    useEffect(() => {
        const ghaia_user = window.localStorage.getItem("ghaia-user");;
        if (ghaia_user && ghaia_user !== null && ghaia_user.length > 0) {
            setUser(JSON.parse(ghaia_user));
        }
    }, []);

    const loginUser = (data: UserDataLogin) => {
        Api.post<LoginResponse>("/login", data)
            .then((res) => {
                if (res.status === 201) {
                    if (typeof window !== "undefined") {
                        notifyLoginSuccess("Logged in successfully", "successLogin");
                        window.localStorage.setItem(
                            "ghaia-tkn",
                            (res.data.token)
                        );
                        window.localStorage.setItem(
                            "ghaia-user",
                            JSON.stringify(res.data.user));
                        router.push("/dashboard")

                    }
                } else {
                    return null;
                }
            })
            .catch((err) => notifyLoginError(err.response.data.message, "errorLogin"));
    };

    const registerUser = (data: UserDataRegister) => {
        Api.post<RegisterResponse>("/users", data)
            .then((res) => {
                if (res.status === 201) {
                    notifyLoginSuccess("User created", "successRegister")
                    router.push("/login")
                }
            })
            .catch((err) => {
                notifyLoginError(err.response.data.message, "errorRegister");
            });
    };

    const patchUser = (data: ContactDataPatch) => {
        Api.patch<UserResponse>(`/users/update/`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    notifyLoginSuccess("updated user", "successUser")
                    closeDropdownProfile()
                    window.localStorage.removeItem("ghaia-user");
                    window.localStorage.setItem(
                        "ghaia-user",
                        JSON.stringify(res.data));
                        setUser(res.data)
                }
            })
            .catch((err) => {
                notifyLoginError(err.response.data.message, "errorUser");
            });
    };

    const deleteUser = () => {
        Api.delete<UserResponse>(`/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.status === 204) {
                    notifyLoginSuccess("Successfully deleted", "successDelete")
                    router.push("/")
                    window.localStorage.clear();
                    closeDropdownProfile()
                }
            })
            .catch((err) => {
                notifyLoginError(err.response.data.message, "errorUser");
            
            });
    };

    const registerContact = (data: ContactDataRegister) => {
        Api.post<ContactResponse>("/contacts", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.status === 201) {
                    notifyLoginSuccess("Contact created", "successContact")
                    closeDropdownContact()
                }
            })
            .catch((err) => {
                notifyLoginError(err.response.data.message, "errorContact");
            });
    };

    const patchContact = (data: ContactDataPatch) => {
        Api.patch<ContactResponse>(`/contacts/${contact.id}/`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    notifyLoginSuccess("Updated contact", "successContact")
                    closeDropdownContactEdit()
                }
            })
            .catch((err) => {
                notifyLoginError(err.response.data.message, "errorContact");
            });
    };

    const deleteContact = (id: string) => {
        Api.delete<ContactResponse>(`/contacts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.status === 204) {
                    notifyLoginSuccess("Successfully deleted", "successDelete")
                }
            })
            .catch((err) => {
                notifyLoginError(err.response.data.message, "errorContact");
            });
    };

    useEffect(() => {
        Api.get<UserResponse>("/contacts/user/info", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                setListContact(res.data.contacts)
            })
            .catch((err) => console.log(err));

    }, [token, registerContact])

    useEffect(() => {
        Api.get<UserResponse>("/contacts/download/info", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                setContactPdf(res.data.contacts)
            })
            .catch((err) => console.log(err));

    }, [token, registerContact,deleteContact, patchContact ])

    return (
        <Context.Provider
            value={{
                registerUser,
                loginUser,
                router,
                listContact,
                setListContact,
                user,
                registerContact,
                deleteContact,
                patchContact,
                deleteUser,
                patchUser,
                contactPdf,
                setContactPdf
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default UserProvider;
