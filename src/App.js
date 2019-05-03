import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container/index'
import pictures from './pictures.json';
import ClickItem from './components/ClickItem/index'
import Nav from './components/Nav/index';

class App extends Component {

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
      console.log("You Lose!");
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
      }
      
      this.setState({
        message: "Good Dog! You Guessed Correctly!",
        topScore: newTopScore,
        score: newScore,
        pictures: shuffledPictures,
        alreadyClicked: newAlreadyClicked
      })
    }
  // const{pictures, score, topScore} = this.state;
  // // is score = top score, if so increment score, set state of score and topScore, shuffle array, set pictures[i] from false to true
  // for (let i=0; i < pictures.length; i++) {
  //   if (pictures[i].id === id) {
  //     if (pictures[i].clicked === false) {
  //       // handle correct guess if pictures[i] === true then they got it wrong; need to reset score to 0 and shuffle array
  //     } else {
  //       // handle incorrect guess
  //     }
  //   } 
  // }
}

  render() {
    console.log(this.state.pictures);
    const {message, score, topScore, pictures} = this.state;
  return (
    <div className="App">
      <Nav message={message} score={score} topScore={topScore} />
      <Container>
        {pictures.map((picture, index) => (
          <ClickItem key={index} id={picture.id} image={picture.image} handleClick={this.imageClick} />
        ))}
      </Container>
    </div>
  );
}
}

export default App;
