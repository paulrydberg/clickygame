import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Picture from './components/Picture';
import pictures from './pictures.json';

class App extends Component {
  state = {
    pictures,
    currentScore: 0,
    highestScore: 0
  };

  render() {
    return (
      <Wrapper>
        <Header
          currentScore={this.state.currentScore}
          highestScore={this.state.highestScore}
        >
          The Clickedy Clicked Game
        </Header>
        {this.state.pictures.map(picture => (
          <Picture
            clickedVariable={this.clickedVariable}
            id={picture.id}
            key={picture.id}
            pictureURL={picture.pictureURL}
          />
        ))}
      </Wrapper>
    );
  }

  clickedVariable = id => {
    this.state.pictures.find((x, i) => {
      if (x.id === id) {
        if (pictures[i].timesClicked === 0) {
          pictures[i].timesClicked = pictures[i].timesClicked + 1;
          this.setState({ currentScore: this.state.currentScore + 1 });
          this.state.pictures.sort(() => Math.random() - 0.8);
          return true;
        } else {
          this.highScoreRestart();
        }
      }
    });
  };

  highScoreRestart = () => {
    if (this.state.currentScore > this.state.highestScore) {
      this.setState({ highestScore: this.state.currentScore });
    }
    this.state.pictures.forEach(picture => {
      picture.timesClicked = 0;
    });
    alert(`You Lose! 
Your Score: ${this.state.currentScore}`);
    this.setState({ currentScore: 0 });
    return true;
  };
}

export default App;
