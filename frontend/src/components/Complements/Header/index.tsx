import { HeaderContainer, DivHeader, Button, Nav } from "./style";
import logo from "@/assets/image/logo/logo.svg";
import { useContext } from "react";
import SideBar from "./Sidebar";
import { Context } from "@/context/pageContext";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const { showSideBar, isSideBarVisible } = useContext(Context);

    return (
        <HeaderContainer>
            <DivHeader>
                <div className="menu-icon">
                    <label className="menu-icon-animation">
                        <input type="checkbox" />
                        <span onClick={showSideBar}></span>
                        <span onClick={showSideBar}></span>
                        <span onClick={showSideBar}></span>
                    </label>
                </div>
                <Image src={logo} className="img" width={50} height={100} alt="logo"></Image>
                <Nav>
                    <Link href="/" className="link">Home</Link>
                    <Link href="/" className="link">Contact</Link>
                    <Link href="/register" className="link">Register</Link>
                    <Link href="/login" className="item-disable"><Button>Login</Button></Link>
                </Nav>
                {isSideBarVisible && <SideBar />}
            </DivHeader>
        </HeaderContainer>
    );
};

export default Header;
