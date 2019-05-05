//Require in Dependencies
import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import Footer from "../Footer";
import Modal from "../Modal";
import pictures from "../../pictures.json";

// Game logic
class Game extends Component {

    state = {
      message: "Click on any picure to start",
      modalMessage: "",
      pictures: pictures,
      score: 0,
      topScore: 0,
      alreadyClicked: [],
      showModal: false
    }
  
  imageClick = (id) => {
    console.log(id);
    const{alreadyClicked, score, topScore, pictures} = this.state;
    // Shuffle pics
    let shuffledPictures = Array.from(pictures);
    shuffledPictures.sort(() => Math.random() - 0.5);
      if (alreadyClicked.includes(id)) {
        this.showModal("AWWWW, POOR DOGGY. YOU LOST.", "assets/images/you-lost-dog.png");
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
            this.showModal("ATTA DOG! YOU WON!", "assets/images/you-won-dog.png")
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

  showModal(message, image) {
   this.setState({modalMessage: message, modalImage: image, showModal: true})
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
        <Modal message={this.state.modalMessage} image={this.state.modalImage} show={this.state.showModal} onClose={()=>this.setState({showModal:false})} />
        <Footer />
      </div>
    );
  }
  }
  
  export default Game;