import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    toys: [],
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  displayToys = (toys) => {
    console.log('displayToys')
    this.setState({
      toys
    })
  }

  addToy = (toy) => {
    console.log('addToy')
    this.setState({
     toys: [...this.state.toys, toy]
    })
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toy)
    });
  }

  delToy = (toyId) => {
    console.log('delToy')

    const toy = this.state.toys.find(toy => toy.id === toyId)
    const newToyArray = this.state.toys.find(toy => toy.id !== toyId)

     fetch(`http://localhost:3000/toys/delete/${toyId}`, {
       method: 'DELETE',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(toy)
     })
     .then(res => res.json())
     .then(
      this.setState({
        toys: newToyArray
       })
     )
  }

  componentDidMount(){
    console.log('did mount')
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(
      toys => {
        this.displayToys(toys)
    })
  }

  render(){

    console.log(this.state.toys)

    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toysToDisplay={this.state.toys} delToy={this.delToy}/>
      </>
    );
  }

}

export default App;
