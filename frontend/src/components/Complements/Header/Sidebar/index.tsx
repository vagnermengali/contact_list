import { Container } from "./style";
import logo from "@/assets/image/logo/logo.svg";
import { useContext } from "react";
import { Context } from "@/context/pageContext";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
    const { isSideBarVisible } = useContext(Context);

    return (
        <Container isSideBarVisible={isSideBarVisible}>
            <div className="menu">
                <div>
                    <Link href="/" className="menu-item">Home</Link>
                    <Link href="/" className="menu-item">Contact</Link>
                    <Link href="/register" className="menu-item">Register</Link>
                    <Link href="/login" className="menu-item menu-item-disable">Login</Link>
                </div>
                <div>
                    <Image src={logo} width="100" height="100" alt="logo-letter" className="menu-item img"></Image>
                </div>
            </div>
        </Container>
    );
};

export default SideBar;