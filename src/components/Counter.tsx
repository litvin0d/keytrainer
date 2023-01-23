import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Counter = () => {
    const current = useSelector((state: RootState) => state.counter.current);
    const total = useSelector((state: RootState) => state.counter.total);

    return <h2>{current}/{total}</h2>;
}