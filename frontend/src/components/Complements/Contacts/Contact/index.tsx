import { CardBody } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "@/validators/contact";
import { useContext, useState } from "react";
import { Context as ContextUser, Contacts } from "@/context/userContext";
import { FaMapMarkerAlt, FaPen, FaTrash, FaEllipsisV, FaCheck } from "react-icons/fa";
import { Context as ContextPage, } from "@/context/pageContext";

const Card = () => {
  const { listContact, deleteContact, patchContact, handleClickContact } = useContext(ContextUser)
  const { showDropdownContactEdit } = useContext(ContextPage)

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
    <>
      {listContact?.map((elem: Contacts) => (
        <CardBody onSubmit={handleSubmit(patchContact)} key={elem.id} id={elem.userId}>
          <button className="edit options">
            <FaEllipsisV />
            <div className="tooltip">
              <button onClick={() => {
                showDropdownContactEdit(elem)
              }}><FaPen />ﾠedit</button>
              <button onClick={() => deleteContact(elem.id)}><FaTrash />ﾠdelete</button>
            </div>
          </button>
          <div>
            <p className="name">{elem.name}</p>
            <p className="email">{elem.email}</p>
            <p className="telephone">{elem.telephone}</p>
          </div>
        </CardBody>
      ))}
    </>
  );
}

export default Card;