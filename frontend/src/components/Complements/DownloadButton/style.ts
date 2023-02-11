import styled from "styled-components";

interface Props {
    dropdown?: number;
}

export const StyledDownloadButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: 3;
`;
export const Button = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    margin: 1.875rem;
    padding: auto;
    border: none;
    outline: none;
    color: var(--white);
    cursor: pointer;
    position: relative;
    z-index: 3;
    border-radius: 100%;
    font-weight: 700;
    font-size: 1.1rem;
    background-color: var(--brand1);

    .tooltip {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        bottom: 3.5rem;
        width:100%;
        height:min-content;
        padding: 0.5rem 0.5rem;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: 600;
        opacity: ${(props: Props) => props.dropdown};
        pointer-events: ${(props: Props) => props.dropdown === 0 ? `none` : `all`};
        transition: all 0.2s ease;
        z-index: 9999;
        gap: 1rem;
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
        border-radius: 100%;
        font-weight: 700;
        color: var(--grey4);
        padding: .5rem;
        white-space: nowrap;
        :hover {
            background-color: var(--white1);
        }
    }
    .tooltip button span{
        background-color: var(--transparent);
        color: white;
        position: absolute;
        right: 40px;
        font-size: 12px;
        min-width: 100px;
        padding: 10px 10px;
        top: 0;
        transition: 0.5s;
        opacity: 0;
    }
    .tooltip button:hover span{
        opacity: 1;
    }
    
`;
