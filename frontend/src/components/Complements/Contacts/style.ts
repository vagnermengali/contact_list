import styled from "styled-components";

export const StyledContact = styled.section`
    width:  100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
`;

export const DivContainer = styled.div`
    width:  80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    @media (max-width: 950px) {
    
    }
    @media (max-width: 600px) {
        width:  90%;
        height: 90%;
    } 
`;