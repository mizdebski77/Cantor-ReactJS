import { Clock } from "./Clock/clock";
import { HeaderTitle, Wrapper } from "./styledHeader";
export const Header = ({ title }) => (
    <Wrapper>
        <Clock />
        <HeaderTitle> {title} </HeaderTitle>
    </Wrapper>

);