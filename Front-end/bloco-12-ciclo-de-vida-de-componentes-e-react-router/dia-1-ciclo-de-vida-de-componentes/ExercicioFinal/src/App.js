import React from "react";

class App extends React.Component {
  state = {
    currentDogImage: "",
  };

  componentDidMount() {
    this.fetchDogsList();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.currentDogImage.message.includes('terrier')) {
      return false;
    }
    return true;
  }
  

  componentDidUpdate() {
    const { currentDogImage } = this.state;
    localStorage.setItem('DogImage', currentDogImage.message);
    const dogBreed = currentDogImage.message.split('/')[4];
    alert(dogBreed);
  }

  fetchDogsList = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => this.setState({ currentDogImage: data }));
    // const url = "https://dog.ceo/api/breeds/image/random";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({ dogImagesList: data.message });
  };

  render() {
    const { currentDogImage } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div>
        <h1>Dogs Images</h1>
        <button type="button" onClick={this.fetchDogsList}>Próximo Cachorrinho</button>
        <div>
          {currentDogImage === '' ? loadingElement : <img src={currentDogImage.message} alt="Random dog" />}
        </div>
      </div>
    );
  }
}

export default App;
