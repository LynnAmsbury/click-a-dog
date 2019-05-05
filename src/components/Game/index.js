//Require in Dependencies
import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import pictures from "../../pictures.json";

// Game logic
class Game extends Component {

    state = {
      message: "Click on any picure to start",
      pictures: pictures,
      score: 0,
      topScore: 0,
      alreadyClicked: []
    }
  
  imageClick = (id) => {
    console.log(id);
    const{alreadyClicked, score, topScore, pictures} = this.state;
    // Shuffle pics
    let shuffledPictures = Array.from(pictures);
    shuffledPictures.sort(() => Math.random() - 0.5);
      if (alreadyClicked.includes(id)) {
        alert("AWWWW, POOR DOGGY. YOU LOST. NO TREAT FOR NOW.");
        this.setState({
          message: "Bad Dog! You Guessed Incorrectly!",
          // Set score to 0
          score: 0,
          // Reset alreadyClicked
          alreadyClicked: [],
          pictures: shuffledPictures
        })
      } else {
        // Push clicked picture id into array of pictures already clicked
        let newAlreadyClicked = Array.from(alreadyClicked)
        newAlreadyClicked.push(id);
        // Increment score
        const newScore = score + 1;
        let newTopScore = topScore;
        if (newScore > topScore) {
          newTopScore = newScore;
          if (newTopScore === 12) {
            alert("ATTA DOG! YOU WON! YOU GET A TREAT!")
          }
        }
        
        this.setState({
          message: "Good Dog! You Guessed Correctly!",
          topScore: newTopScore,
          score: newScore,
          pictures: shuffledPictures,
          alreadyClicked: newAlreadyClicked
        })
      }
  }
  
    render() {
      console.log(this.state.pictures);
      const {message, score, topScore, pictures} = this.state;
    return (
      <div className="App">
        <Nav message={message} score={score} topScore={topScore} />
        <Header />
        <Container>
          {pictures.map((picture, index) => (
            <ClickItem key={index} id={picture.id} image={picture.image} 
            handleClick={this.imageClick} />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
  }
  
  export default Game;