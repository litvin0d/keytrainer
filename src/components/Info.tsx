import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Counter } from "./Counter";
import { Timer } from "./Timer";
import s from "../scss/Info.module.scss";

export const Info = () => {
    const started = useSelector((state: RootState) => state.started.value)

    return (
        <div className={`${s.root} ${started && s.started}`}>
            <Timer timeout={30} />
            <Counter />
        </div>
    );
}