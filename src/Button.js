import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export default class Button extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        value: PropTypes.number,
        running_count: PropTypes.number,
        cards_used: PropTypes.number,
        click: PropTypes.func,
    };

    handleClick = () => {
        this.props.click(this.props.value);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.text}</button>
            </div>
        )
    }


}