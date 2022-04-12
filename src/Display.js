import React from "react";
import "./Display.css"
import PropTypes from "prop-types";

export default class Display extends React.Component {
    static propTypes = {
        running_count: PropTypes.number,
        num_decks: PropTypes.number,
        cards_used: PropTypes.number
    }

    calc_true_count = () => {
        let remaining_cards = (this.props.num_decks*52) - this.props.cards_used;
        let reamining_decks = remaining_cards/52;
        console.log(this.props.running_count/reamining_decks)
        return this.props.running_count/reamining_decks;

    }

    render() {
        return (
            <div>
                <h1>{this.calc_true_count()}</h1>
            </div>
        )
    }
}