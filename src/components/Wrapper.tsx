import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Header } from "./Header";
import { Quote } from "./Quote";
import { InputArea } from "./InputArea";
import s from "../scss/Wrapper.module.scss";

export const Wrapper = () => {
    const quote = useSelector((state: RootState) => state.quote.value);

    return (
        <div className={s.root}>
            <Header />
            <Quote />
            {quote && <InputArea />}
        </div>
    );
};
