import logo from './logo.svg';
import './App.css';
import Button from "./Button.js"
import React from 'react';
import Display from './Display';
import calculate from './calculate';

export default class App extends React.Component {
  
  state = {
    running_count: 0,
    cards_used: 0,
    num_decks: 8

  };

  handleClick = value => {
    this.setState(calculate(this.state, value));
  }


  render() {
    return (
      <div class="button" className="App">
        <Button text={"+1"} value={1} running_count={this.state.count} cards_used={this.state.cards_used} click={this.handleClick}/> 
        <Button text={"0"} value={0} running_count={this.state.count} cards_used={this.state.cards_used} click={this.handleClick} /> 
        <Button text={"-1"} value={-1} running_count={this.state.count} cards_used={this.state.cards_used} click={this.handleClick} /> 
        <Button text={"New Shoe"} value={2} running_count={this.state.count} cards_used={this.state.cards_used} click={this.handleClick}/> 
        <Display running_count={this.state.running_count} num_decks={this.state.num_decks} cards_used={this.state.cards_used} />

      </div>
    );
  }
}

