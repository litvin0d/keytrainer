import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEndless, setTimeOut } from "../redux/timeoutSlice";

import s from "../scss/Options.module.scss";

export const Options = () => {
    const [active, setActive] = useState<number>(2);
    const dispatch = useDispatch()

    const onClickHander = (activeId: number, timeout: number, endless: boolean) => {
        setActive(activeId);
        dispatch(setTimeOut(timeout));
        dispatch(setEndless(endless));
        console.log(`activeId: ${activeId}; timeout: ${timeout}; endless: ${endless}`)
    }

    return (
        <ul className={s.root}>
            <li onClick={() => onClickHander(1, 15, false)} className={active === 1 ? s.active : ""}>15s</li>
            <li onClick={() => onClickHander(2, 30, false)} className={active === 2 ? s.active : ""}>30s</li>
            <li onClick={() => onClickHander(3, 60, false)} className={active === 3 ? s.active : ""}>60s</li>
            <li onClick={() => onClickHander(4, 120, false)} className={active === 4 ? s.active : ""}>120s</li>
            <li onClick={() => onClickHander(5, 0, true)} className={active === 5 ? s.active : ""}>
                <svg className={s.svg} xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                    <path d="M4.521 14.5q-1.896 0-3.209-1.312Q0 11.875 0 10q0-1.875 1.312-3.188Q2.625 5.5 4.521 5.5q.75 0 1.448.26.698.261 1.26.761L8.875 8 7.75 9l-1.5-1.354q-.354-.313-.792-.479Q5.021 7 4.542 7q-1.25 0-2.146.875Q1.5 8.75 1.5 10t.896 2.135q.896.886 2.146.886.479 0 .916-.167.438-.166.792-.479l6.521-5.854q.562-.479 1.26-.75t1.448-.271q1.896 0 3.209 1.312Q20 8.125 20 10q0 1.896-1.323 3.198T15.458 14.5q-.75 0-1.448-.26-.698-.261-1.26-.761l-1.667-1.5L12.25 11l1.5 1.354q.354.313.792.479.437.167.916.167 1.25 0 2.146-.875.896-.875.896-2.125t-.896-2.135q-.896-.886-2.146-.886-.479 0-.916.167-.438.166-.792.479l-6.521 5.854q-.562.5-1.26.761-.698.26-1.448.26Z" />
                </svg>
            </li>
        </ul>
    );
};
