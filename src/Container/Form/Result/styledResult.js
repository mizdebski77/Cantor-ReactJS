import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    padding: 20px;
    word-break: break-word;
    text-align: center;

    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    }
`;

