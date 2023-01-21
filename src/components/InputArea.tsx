import { SyntheticEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import s from "../scss/InputArea.module.scss";

export const InputArea = () => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const quote = useSelector((state: RootState) => state.quote.value);
    const [incorrect, setIncorrect] = useState(false);
    const [success, setSuccess] = useState(false);

    const onChangeHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement;
        if (ref.current) {
            ref.current.style.height = "auto";
            ref.current.style.height = `${target.scrollHeight}px`;
        }

        const currentResult = target.value;
        if (currentResult === quote.slice(0, currentResult.length) && ref.current) {
            if (currentResult === quote) {
                setSuccess(true);
                ref.current.setAttribute("readonly", "");
            }

            setIncorrect(false);
        } else {
            setIncorrect(true);
            setSuccess(false);
        }
    };

    return (
        <textarea
            className={`${s.root} ${incorrect && s.incorrect} ${success && s.success}`}
            placeholder="Start typing here..."
            ref={ref}
            onChange={onChangeHandler}
        />
    );
};
