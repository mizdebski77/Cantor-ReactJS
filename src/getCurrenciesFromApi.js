import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useRatesFromApi = () => {
    const [apiRates, setApirates] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest");
                const { rates, date } = await response.data
                setApirates({
                    date,
                    rates,
                    state: "success",
                });
            } catch {
                setApirates({
                    state: "error"
                });
            };
        };
        setTimeout(fetchRates, 1500);
    }, []);
    return apiRates;
};

