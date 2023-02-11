import styled from "styled-components";

interface Props {
    dropdown?: string;
}

export const StyledModalContact = styled.section<Props>`
    width:  100%;
    height: 100vh;
    display: ${(props: Props) => props.dropdown};
    align-items: center;
    justify-content: center;
    inset: 0;
    z-index: 3;
    position: fixed;
    top: 0;
    background: rgba( 0, 0, 0, 0.35 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    animation: 0.3s ease-out 0s 1 normal none running eMLfYp;
        @keyframes eMLfYp {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const DivContainer = styled.div`
    width:  80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 950px) {
        width:  100%;
        height: 100%;
    }
    @media (max-width: 600px) {
        width:  100%;
        height: 100%;
    } 
`;

export const Div = styled.div`
    width:  40%;
    height: min-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: var(--brand6);
    backdrop-filter: blur( 5.5px );
    -webkit-backdrop-filter: blur( 5.5px );
    padding: 2rem 1rem 2.8rem 1rem; 
    gap: 1rem;

    .container-button {
        width: 95%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .container-button .button-exit{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5625rem;
        height:  1.5625rem;
        border: none;
        border-radius: 100%;
        cursor: pointer;
        background-color: var(--brand1);
        :hover {
            filter: brightness(110%);
        }
    }
    h1 {
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: var(--grey4);
    }
    span {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: var(--brand2);
    }
    @media (max-width: 950px) {
        width:  80%;
    }
    @media (max-width: 600px) {
        width:  90%;
    } 

`;