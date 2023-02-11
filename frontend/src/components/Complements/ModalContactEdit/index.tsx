import { useContext } from "react";
import { StyledModalContactEdit, DivContainer, Div } from "./style";
import { Context } from "@/context/pageContext";
import { FaTimes } from "react-icons/fa";
import FormContact from "./Form";

const ModalContactEdit = () => {
    const { closeDropdownContactEdit, dropdownContactEdit } = useContext(Context)

    return (
        <StyledModalContactEdit dropdown={dropdownContactEdit}>
            <DivContainer>
                <Div>
                    <div className="container-button">
                        <button className="button-exit" onClick={() => closeDropdownContactEdit()}><FaTimes /></button>
                    </div>
                    <h1>
                    Edit <span>your contact</span> here
                    </h1>
                    <FormContact />
                </Div>
            </DivContainer>
        </StyledModalContactEdit>
    );
}

export default ModalContactEdit;