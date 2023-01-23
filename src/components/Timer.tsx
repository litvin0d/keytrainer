import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFailed } from "../redux/failedSlice";
import { RootState } from "../redux/store";

import s from "../scss/Timer.module.scss";

interface Props {
    timeout: number;
}

export const Timer = ({ timeout }: Props) => {
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const started = useSelector((state: RootState) => state.started.value);
    const failed = useSelector((state: RootState) => state.failed.value);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeLeft(timeout);
    }, [timeout]);

    useEffect(() => {
        if (started) {
            const interval: number = window.setInterval(() => {
                const newTimeLeftInMillis = timeLeft - 1;
                return newTimeLeftInMillis < 0
                    ? clearInterval(interval)
                    : setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    });

    useEffect(() => {
        if (timeLeft === 0) {
            dispatch(setFailed(true));
        }
    }, [dispatch, timeLeft])

    return <h2 className={`${s.root} ${failed && s.failed}`}>{timeLeft}</h2>;
};
