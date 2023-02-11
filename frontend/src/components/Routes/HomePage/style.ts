import styled from "styled-components";
import bg_image from "@/assets/image/background/background.jpg";

export const StyledHome = styled.section`
    width:  100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${bg_image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const DivContainer = styled.div`
    width: 85%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Div = styled.div`
    width:  40%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem; 
    @media (max-width: 950px) {
        width:  80%;
    }
    @media (max-width: 600px) {
        width:  100%;
    }
`;


export const TextTitle = styled.h1`
    font-weight: 600;
    font-size: 2.8125rem;
    line-height: 3.125rem;
    color: var(--grey4);
`;

export const TextParagraph = styled.p`
    font-weight: 500;
    font-size: .9375rem;
    line-height: 15px;
    letter-spacing: .0313rem;
    color: var(--grey4);

`;

export const Button = styled.button`
    width: 50%;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;
    color: var(--white);
    outline: none;
    border: none;
    background: var(--brand2);
    border-radius: .1rem;
    padding: 1rem;
    cursor: pointer;
    :hover {
        filter: brightness(110%);
    }
`;
