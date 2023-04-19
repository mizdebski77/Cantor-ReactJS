import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.color.silver};
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    font-family: monospace;
    font-size: 16px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
        justify-content: center;
    }
`;