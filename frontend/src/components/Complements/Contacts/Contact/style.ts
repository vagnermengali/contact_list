import styled from "styled-components";

interface Props {
    dropdown?: number;
}

export const CardBody = styled.form<Props>`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 23%;
    height: 13rem;
    box-shadow: .0625rem .25rem 1.25rem var(--shadow);
    border-radius: .625rem;
    overflow: hidden;
    background-color: var(--brand7);
    padding: 2rem 1rem;  
    position: relative;

    div {
        width: 100%;
        height: 10rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        overflow: hidden;
        gap: .1rem;
        padding: 0 0 0 1rem;   
    }

    .name {
        font-weight: 700;
        font-size: 1rem;
        color: var(--grey1);
        max-width: 27ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .email {
        font-weight: 700;
        font-size: 1rem;
        color: var(--grey1);
        max-width: 29ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .telephone {
        font-weight: 500;
        font-size: 1rem;
        color: var(--grey2);
        max-width: 34ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .input {
        background-color: var(--brand7);
        outline:none;
        border: none;
        height:2rem;
        filter: brightness(150%);
        border-radius: .2rem;
    }
    label {
        color: var(--grey1);
        font-size: .55rem;
        font-weight: 700;
    }
    .edit {
        align-self: flex-start;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5625rem;
        height:  1.5625rem;
        border: none;
        border-radius: 100%;
        cursor: pointer;
        background-color: var(--brand7);
        color: var(--grey4);
    }
    .options {
        position: relative;
        top:-1rem;
        align-self: flex-end;
        display: flex;
        justify-content: center;
        width: 1.8rem;
        height:  1.8rem;
        border: none;
        font-size: 1.3rem;
        border-radius: 100%;
        cursor: pointer;
        color: var(--grey4);
        :hover {
            color: var(--white);
            .tooltip {
                opacity: 1;
                pointer-events: all;
            }
        }
    }
    .tooltip {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        position: absolute;
        bottom: 3.5rem;
        width: 100px;
        height: min-content;
        padding: 0.5rem;
        opacity: 0;
        pointer-events: none;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        transition: all 0.2s ease;
        z-index: 2;
        gap: 1rem;
        transform: translate(-30%, 150%);
        background-color: var(--brand7);
        filter: brightness(160%);
    }
    .tooltip button {
        display: flex;
        align-items :center;
        justify-content: flex-start;
        cursor: pointer;
        outline:none;
        border:none;
        position: relative;
        background-color: var(--transparent);
        font-size: 1rem;
        font-weight: 700;
        color: var(--grey4);
        padding: .5rem;
        white-space: nowrap;
    }
    .tooltip button:hover {
        opacity: 1;
    }
    @media (max-width: 950px) {
        width: 45%;
      
    }
    @media (max-width: 600px) {
        width: 90%;
        height: 90%;
    } 
`;
