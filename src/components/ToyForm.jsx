import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ToyForm extends Component {

  state = {
      id: uuidv4,
      name: "",
      image: ""
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.persist()
    e.preventDefault()
    this.props.addToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input onChange={this.inputChange} type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name}/>
          <br/>
          <input onChange={this.inputChange} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
