import { Wrapper } from "./styledResult";

export const Result = ({ amount, currentCurrency, targetCurrency, result }) => {
    if (result > 0) {
        return (
            <Wrapper>
                {amount} {currentCurrency} = {result.toFixed(2)} {targetCurrency}
            </Wrapper>
        );
    }

}