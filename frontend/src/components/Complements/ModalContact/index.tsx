import { useContext } from "react";
import { StyledModalContact, DivContainer, Div } from "./style";
import { Context } from "@/context/pageContext";
import { FaTimes } from "react-icons/fa";
import FormContact from "./Form";

const ModalContact = () => {
    const { closeDropdownContact, dropdownContact } = useContext(Context)

    return (
        <StyledModalContact dropdown={dropdownContact} >
            <DivContainer>
                <Div>
                    <div className="container-button">
                        <button className="button-exit" onClick={() => closeDropdownContact()}><FaTimes /></button>
                    </div>
                    <h1>
                        Register your <span>new contact</span>
                    </h1>
                    <FormContact />
                </Div>
            </DivContainer>
        </StyledModalContact>
    );
}

export default ModalContact;