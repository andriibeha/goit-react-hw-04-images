import React, { Component } from "react";
import s from "./Button.module.css"

class Button extends Component {

    render() { 
        return (
            <div className={s.Button} onClick={this.props.onClickMore}>
                Button
            </div>
        );
    }
}
 
export default Button;