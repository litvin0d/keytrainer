import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQuote } from "../redux/quoteSlice";

import s from "../scss/Quote.module.scss";

export const Quote = () => {
    const dispatch = useDispatch();

    const [quoteResult, setQuoteResult] = useState<{
        _id: string;
        content: string;
        author: string;
        authorSlug: string;
        length: number;
        tags: string[];
    }>();
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                await axios
                    .get(
                        "https://api.quotable.io/random?minLength=250&maxLength=290"
                    )
                    .then((res) => {
                        setQuoteResult(res.data);
                    });
            } catch (e) {
                setError(true);
            }
        };

        fetchQuote();
    }, []);

    useEffect(() => {
        quoteResult && dispatch(setQuote(quoteResult.content.slice(0, -1)));
    }, [dispatch, quoteResult]);

    if (!quoteResult) {
        return (
            <div className={s.root}>
                <p className={s.loading}>
                    {error ? "Trainer unavailable" : "Loading..."}
                </p>
            </div>
        );
    }

    return (
        <div className={s.root}>
            <p className={s.content}>{quoteResult.content.slice(0, -1)}</p>
            <p className={s.author}>- {quoteResult.author}</p>
        </div>
    );
};
