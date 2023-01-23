import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { Header } from "./Header";
import { Quote } from "./Quote";
import { Info } from "./Info";
import { InputArea } from "./InputArea";
import s from "../scss/Wrapper.module.scss";
import { Options } from "./Options";

export const Wrapper = () => {
    const quote = useSelector((state: RootState) => state.quote.value);

    return (
        <div className={s.root}>
            <Header />
            <Options />
            <Quote />
            {quote && (
                <div className={s.input}>
                    <Info />
                    <InputArea />
                </div>
            )}
        </div>
    );
};
