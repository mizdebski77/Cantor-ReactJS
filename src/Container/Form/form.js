import { useState } from "react";
import { Result } from "./Result/result";
import { CurrencyTitle, DateInformation, Input, Loading, Option, Options, Select, StyledError, Title, Value, Wrappa, Wrapper, } from "./styledForm";
import { useRatesFromApi } from "../../getCurrenciesFromApi";

export const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const [currentCurrency, setCurrentCurrency] = useState("EUR");
    const [targetCurrency, setTargerCurrency] = useState("EUR");
    const amount = +inputValue;

    const getRates = useRatesFromApi();
    const currentRate = getRates.rates?.[currentCurrency];
    const targetRate = getRates.rates?.[targetCurrency];
    const status = getRates.state;

    const result = (amount * targetRate) / currentRate;
    return (
        <>
            {status === "loading" ? (
                <Loading>
                    Downloading data from the server... ⌛️
                </Loading>
            ) : status === "error" ? (
                <StyledError>
                    Oops! Something went wrong.  <br />Please check your internet connection or try again later. 😐
                </StyledError>
            ) : (
                <>
                    <Wrapper>

                        <div>
                            <Title> Amount: </Title>

                            <Input>
                                <Value
                                    value={inputValue}
                                    onChange={({ target }) => setInputValue(target.value)}
                                    type="number"
                                    min="0"
                                    placeholder="Enter a value"
                                />


                                <Options>
                                    <CurrencyTitle> From: </CurrencyTitle>
                                    <CurrencyTitle> To: </CurrencyTitle>
                                    <Select
                                        as="select"
                                        value={currentCurrency}
                                        onChange={({ target }) => setCurrentCurrency(target.value)}
                                    >
                                        {Object.keys(getRates.rates).map((rates) => (
                                            <Option
                                                key={rates}
                                                value={rates}>
                                                {rates}
                                            </Option>
                                        ))}
                                    </Select>
                                    <Select
                                        value={targetCurrency}
                                        onChange={({ target }) => setTargerCurrency(target.value)}
                                    >
                                        {Object.keys(getRates.rates).map((rates) => (
                                            <Option
                                                key={rates}
                                                value={rates}>
                                                {rates}
                                            </Option>
                                        ))}
                                    </Select>
                                </Options>

                            </Input>
                        </div>
                        <Result
                            result={result}
                            currentCurrency={currentCurrency}
                            amount={amount}
                            targetCurrency={targetCurrency}
                        />

                    </Wrapper>
                    <Wrappa>
                        Exchanges rates are taken from the European Central Bank
                        <DateInformation>
                            As of: {getRates.date}
                        </DateInformation>
                    </Wrappa>
                </>




            )}

        </>
    );
};