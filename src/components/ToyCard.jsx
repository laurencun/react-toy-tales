import React, { Component } from 'react';

class ToyCard extends Component {

  render() {

    return (
      <div className="card">
        <h2>{this.props.toy.name /* Toy's Name */}</h2>
        <img src={this.props.toy.image /* Toy's Image */} alt={'' /* Toy's Name */} className="toy-avatar" />
        <p>{this.props.toy.likes /* Toy's Likes */} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button onClick={this.props.delToy(this.props.toy.id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
