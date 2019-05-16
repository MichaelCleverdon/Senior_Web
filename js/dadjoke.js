/*import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: null
    };
    this.onTellJoke = this.onTellJoke.bind(this);
  }
  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ joke: json.joke });
      });
  }
  render() {
    return (
     <div>
         <button onClick={this.onTellJoke}>Tell me a joke</button>
        <p>{this.state.joke}</p>
     </div>
    );
  }
}
const domContainer = document.getElementById("#dadJoke");
ReactDOM.render(<App/>, domContainer);

*/
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { joke: null };
    this.onTellJoke = this.onTellJoke.bind(this);
}  
onTellJoke(){
    fetch("https://icanhazdadjoke.com/" ,{
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ joke: json.joke });
    });
};

  render() {
    return e(
      'button',
      { onClick: onTellJoke() },
      'Click me for a Dad Joke'),
      document.getElementById('joke').innerHTML = joke;
      
    );
  }
}
const domContainer = document.querySelector('#dadJoke');
ReactDOM.render(e(LikeButton), domContainer);