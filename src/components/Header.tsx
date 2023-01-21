import s from "../scss/Header.module.scss";

export const Header = () => {
    return (
        <div className={s.root}>
            <h1>keytrainer</h1>
            <ul className={s.links}>
                <li>
                    <a
                        href="https://github.com/litvin0d"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://t.me/litvin0d"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Telegram
                    </a>
                </li>
                <li>
                    <a
                        href="https://vk.com/litvinod"
                        target="_blank"
                        rel="noreferrer"
                    >
                        VK
                    </a>
                </li>
            </ul>
        </div>
    );
};
