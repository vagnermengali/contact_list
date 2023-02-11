import styled from "styled-components";
import bg_image from "@/assets/image/background/bg.jpg";

interface Props {
    dropdown?: number;
}

export const HeaderContainer = styled.header`
    display:flex;
    align-items:center;
    flex-direction:column;
    position: fixed;
    top: 0;
    z-index:3;
    width:100%;
    background: rgba( 0, 0, 0, 0.75 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
`
export const Nav = styled.nav`
    display:flex;
    width: 80%;
    align-items:center;
    padding: .5rem 0;
    justify-content:space-between;
    @media(max-width: 950px) {
     
    }
    @media(max-width: 600px) {
       
    }
`
export const Div = styled.div<Props>`
    display:flex;
    align-items:center;
    gap: .4375rem;

    .profile a {
        position: relative;
        text-decoration: none;
        color: var(--grey4);

    }
    .profile a .tooltip{
        display:flex;
        flex-direction:column;
        width: 200px;
    }
    .div-img {
        display: flex;
        justify-content: center;
        width:50px;
        height: 50px;
        border-radius: 100%;
        overflow: hidden;

    }
    .tooltip {
        display: flex;
        background: url(${bg_image});
        position: absolute;
        bottom: 2.1875rem;
        width:100%;
        height:min-content;
        left: -110%;
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        opacity: ${(props: Props) => props.dropdown};
        pointer-events: ${(props: Props) => props.dropdown === 0 ? `none` : `all`};
        transform: translate(-50%, 110%);
        transition: all 0.2s ease;
        z-index: 3;
        box-shadow: 0px 0px 10px 0px var(--shadow);
    }
    .tooltip:after {
        content: " ";
        position: absolute;
        top: -0.5rem;
        left: 86.5%;
        border: solid;
        border-width: 10px 10px 0 10px;
        border-color: transparent;
        transform: translate(-50%, 50%);
        transform: rotate(180deg);
        border-top-color: var(--brand2);
    }
    .tooltip button {
        display: flex;
        align-items :center;
        justify-content: flex-start;
        cursor: pointer;
        outline:none;
        border:none;
        background-color: var(--trnasparent);
        font-size: 1rem;
        font-weight: 700;
        color: var(--grey4);
        padding: 1rem;
    }
`
export const Img = styled.img`
    width:2.8rem;

`
export const TitleName = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 1rem;
    color: var(--white);
    text-align: end;
    text-transform: capitalize;
`