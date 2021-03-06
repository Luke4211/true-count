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
        return this.props.running_count/reamining_decks;

    }

    calc_penetration = () => {
        let remaining_cards = (this.props.num_decks*52) - this.props.cards_used;
        return 100*(1 - (remaining_cards/(this.props.num_decks*52)));
    }

    render() {
        return (
            <div>
                <h1>True Count: {Number(this.calc_true_count()).toFixed(2)}</h1>
                <h1>Current Deck Penetration: {Number(this.calc_penetration()).toFixed(2)}%</h1>
            </div>
        )
    }
}