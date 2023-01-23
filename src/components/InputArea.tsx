import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

import { setCounterCurrent, setCounterTotal } from "../redux/counterSlice";
import s from "../scss/InputArea.module.scss";
import { setStarted } from "../redux/startedSlice";

export const InputArea = () => {
    const refTextArea = useRef<HTMLTextAreaElement>(null);
    const quote = useSelector((state: RootState) => state.quote.value);
    const failed = useSelector((state: RootState) => state.failed.value);
    const dispatch = useDispatch();
    const [incorrect, setIncorrect] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const handleTextAreaAcrive = () => {
            if (
                refTextArea.current &&
                refTextArea.current !== document.activeElement
            ) {
                refTextArea.current.focus();
            }
        };

        document.body.addEventListener("keypress", handleTextAreaAcrive);

        return () =>
            document.body.removeEventListener("keypress", handleTextAreaAcrive);
    }, []);

    useEffect(() => {
        const total: number = quote.split(" ").length;
        dispatch(setCounterTotal(total));
    }, [dispatch, quote]);

    useEffect(() => {
        failed &&
            refTextArea.current &&
            refTextArea.current.setAttribute("readonly", "");
    }, [failed]);

    const onChangeHandler = (e: SyntheticEvent) => {
        const target = e.target as HTMLTextAreaElement;
        if (refTextArea.current) {
            refTextArea.current.style.height = "auto";
            refTextArea.current.style.height = `${target.scrollHeight}px`;
        }

        const currentResult = target.value;
        if (
            currentResult === quote.slice(0, currentResult.length) &&
            refTextArea.current
        ) {
            const current: number = currentResult.split(" ").length;
            dispatch(setCounterCurrent(current - 1));

            if (currentResult === quote) {
                setSuccess(true);
                dispatch(setCounterCurrent(current));
                refTextArea.current.setAttribute("readonly", "");
            }

            setIncorrect(false);
        } else {
            setIncorrect(true);
            setSuccess(false);
        }

        if (currentResult === "") {
            dispatch(setCounterCurrent(0));
        } else {
            dispatch(setStarted(true));
        }
    };

    return (
        <textarea
            className={`${s.root} ${incorrect && s.incorrect} ${
                success && s.success
            } ${failed && s.failed}`}
            placeholder="Click here or start typing..."
            ref={refTextArea}
            onChange={onChangeHandler}
        />
    );
};
