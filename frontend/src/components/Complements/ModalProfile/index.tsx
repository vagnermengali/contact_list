import { useContext } from "react";
import { StyledModalProfile, DivContainer, Div } from "./style";
import { Context as ContextPage } from "@/context/pageContext";
import { Context as ContextUser } from "@/context/userContext";
import { FaTimes } from "react-icons/fa";
import FormContact from "./Form";

const ModalProfile = () => {
    const { closeDropdownProfile, dropdownProfile } = useContext(ContextPage)
    const { deleteUser} = useContext(ContextUser)

    return (
        <StyledModalProfile dropdown={dropdownProfile}>
            <DivContainer>
                <Div>
                    <div className="container-button">
                        <button className="button-exit" onClick={() => closeDropdownProfile()}><FaTimes /></button>
                    </div>
                    <h1>
                        Confirm your <span>user information</span>
                    </h1>
                    <FormContact />
                    <button className="delete" onClick={() => deleteUser()}>
                        Delete User
                    </button>
                </Div>
            </DivContainer>
        </StyledModalProfile>
    );
}

export default ModalProfile;