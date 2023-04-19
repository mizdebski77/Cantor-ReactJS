import { Wrapper } from "./styledClock";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});



export const Clock = () => {
    const date = useCurrentDate();
    

    return (
        <Wrapper>
            {formatDate(date)}
        </Wrapper>
    )
};