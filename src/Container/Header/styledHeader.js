import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    border-bottom: solid ${({theme}) => theme.color.nevada};
`;  

export const HeaderTitle = styled.h1`
    text-align: center;
    padding: 20px;
    padding-top: 0;
    font-weight: normal;
    margin: 0;
`;