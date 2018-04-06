import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import pokemon from "./pokemon.json";
import "./App.css";

function shufflePokemon(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

class App extends Component {
  // Set this.state
  state = {
    pokemon,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Fainted!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPokemon = shufflePokemon(pokemon);
    this.setState({ pokemon: shuffledPokemon });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Pokemon - Gotta Catch em All!"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        {/* <Title>
          Click on each Pokemon without hitting any duplicates or you lose!
        </Title> */}

        <Container>
          <Row>
            {this.state.pokemon.map(friend => (
              <Column size="md-3 sm-6">
                <PokemonCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;