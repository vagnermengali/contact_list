import { HeaderContainer, Nav, Img, Image, Div, TitleName } from "./style"
import logo from "@/assets/image/logo/logo.svg";
import { useContext } from "react"
import { Context as ContextPage } from "@/context/pageContext"
import { Context as ContextUser } from "@/context/userContext"
import { FaSignOutAlt, FaUserCircle, FaCog, FaHome, FaThLarge, FaUserAlt, FaAddressBook } from "react-icons/fa";

function Header() {
    const { dropDownProfile, handleClickdropDownProfile, router, showDropdownProfile, contact } = useContext(ContextPage)
    const { user } = useContext(ContextUser)

    return (
        <HeaderContainer>
            <Nav>
                <Img src={logo} alt="logo" />
                <Div dropdown={dropDownProfile}>
                    <TitleName>{user.username}</TitleName>
                    <div className="profile" onClick={() => handleClickdropDownProfile()}>
                        <a onClick={() => handleClickdropDownProfile()}>
                            <div className="div-img">
                                <Image src={user.avatar_url} className="img" width={50} height={50} alt="logo"/>
                            </div>
                            <div className="tooltip">
                                <button onClick={() => router.push("/dashboard")}><FaThLarge />ㅤDashboard</button>
                                <button onClick={() => showDropdownProfile(contact)}><FaCog />ㅤSettings</button>
                                <button onClick={() => {
                                    window.localStorage.clear()
                                    router.push("/")
                                }}><FaSignOutAlt />ㅤLogout</button>
                            </div>
                        </a>
                    </div>
                </Div>
            </Nav>
        </HeaderContainer >
    )
}

export default Header




