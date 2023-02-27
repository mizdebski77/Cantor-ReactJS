import styled from "styled-components";

export const Wrapper = styled.main`
    box-shadow: 0 0 20px ${({ theme }) => theme.color.radius}; 
    max-width: 1200px;
    width: 90%;
    margin: 0px auto;
    border: ${({ theme }) => theme.color.nevada};
    color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    backdrop-filter: blur(6px);

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        width: 100%;
    } 
`;


export const Loading = styled.p`
  color: ${({ theme }) => theme.color.nevada};
  text-align: center;
`;

export const StyledError = styled.p`
  color: ${({ theme }) => theme.color.red};
  text-align: center;
`;


