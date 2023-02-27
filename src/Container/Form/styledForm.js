import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 20px;
    padding: 20px;
    
`;

export const CurrencyTitle = styled.div`
    padding: 20px 0 0 0;
    font-size: 20px;
    
`;


export const Input = styled.div`
    padding: 20px;
    padding-top: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}){
        display: flex;
        flex-direction: column;
    }
`;

export const Value = styled.input`
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    width: 100%;
`;

export const Select = styled.select`
    text-align: center;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.color.white};
    color: white;
    padding: 10px;
    background: transparent;
`;

export const Option = styled.option`
    color: ${({ theme }) => theme.color.black};
`;

export const Options = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.white};
  padding: 50px;
  text-align: center;
  font-size: 30px;
`;

export const StyledError = styled.p`
  color: ${({ theme }) => theme.color.red};
  text-align: center;
  font-size: 30px;
  padding: 50px;

`;

export const Wrappa = styled.div`
    border-top: solid ${({ theme }) => theme.color.nevada};
    padding: 20px;
    font-family: monospace;
    text-align: center;
    color: ${({ theme }) => theme.color.silver};
    font-size: 20px;
`;

export const DateInformation = styled.p`
color: ${({ theme }) => theme.color.silver};
padding-bottom: 0px;
margin-bottom: 0;
`


