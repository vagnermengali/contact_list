import styled from "styled-components";

interface Props {
    dropdown?: string;
}

export const StyledModalProfile = styled.section<Props>`
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
    width:  95%;
    height: min-content;
    position:relative;
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
        gap: 2rem;
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
        white-space: nowrap;
    }
    span {
        font-weight: 700;
        font-size: 20px;
        line-height: 32px;
        color: var(--brand2);
    }
  .delete {
        position: absolute;
        right: 12rem;
        bottom: 2.8rem;
        border: none;
        outline: none;
        color: var(--white);
        background: var(--brand2);
        border-radius: .125rem;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1rem;
        min-width: 120px;     
        width: 15%;
        height: 3.5rem;
        box-sizing: border-box;
        cursor: pointer;
    }

    .delete:hover {
        filter: brightness(110%);
    }
    @media (max-width: 950px) {
        width:  80%;
        .delete {
        right: 9.3rem;
        }
    }
    @media (max-width: 600px) {
        width:  90%;
        .delete {
        right: 9.3rem;
        }
        h1 {
            font-size: 17px;
        }
        span {
            font-size: 17px;
        }
    }
`;