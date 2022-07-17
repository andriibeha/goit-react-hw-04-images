import s from "./Button.module.css";

function Button({onClickMore}) {
    return (
        <div className={s.Button} onClick={onClickMore}>
            Button
        </div>
    );
};


export default Button;