import React, { Component } from "react";

class App extends Component {
  state = {
    brand: 'Mercedes',
    model: 'S300',
    manufacture: 'Germany',
    colour: 'black',
    typeOfColours: ['Black', 'White', 'Blue', 'Red', 'Silver', 'Green']
  }

  handleClick = () => {
    // to update state this.setState()
    this.setState({
      brand: 'BMW',
      model: 'X3',
      manufacture: 'Italy',
      colour: 'blue'
    });
  }

  person = [
    {name: "Sean", age: "24", job: "developer"},
    {name: "Clarissa", age: "25", job: "accountant"},
    {name: "Samuel", age: "30", job: "banker"},
    {name: "Ben", age: "42", job: "pilot"},
  ];

  //lifecycle 
  render() {
    return (
      //jsx
      // this refering to App
      <div>
      <br></br>
        The car is a {this.state.colour} {this.state.brand} and model is {this.state.model}, made from {this.state.manufacture}
        <br></br><br></br>
        <button onClick={this.handleClick}>Click to Change Car</button>
        <br></br><br></br>
        <b>Array of People:</b><br></br><br></br>
         {this.person.map(({name, age, job}) => (
          <ul>
            <li>
              <p key = {name}>
              {name} is {age} years old and works as a {job}.
              </p>
            </li>
          </ul>
         ) 
         )
          }

      </div>
    )
  }

}

export default App;