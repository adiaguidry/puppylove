import React, { Component } from "react";
import Card from "./common/card";
import dogtoy from "../images/dogtoy.jpg";

class Store extends Component {
  state = {
    cards: [
      {
        _id: "2222",
        image: dogtoy,
        title: "Dog Toy",
        text: "Keep your dog entertained for hours"
      },
      {
        _id: "2222",
        image: dogtoy,
        title: "Dog Toy",
        text: "Keep your dog entertained for hours"
      },
      {
        _id: "2222",
        image: dogtoy,
        title: "Dog Toy",
        text: "Keep your dog entertained for hours"
      },
      {
        _id: "2222",
        image: dogtoy,
        title: "Dog Toy",
        text: "Keep your dog entertained for hours"
      }
    ]
  };
  render() {
    const { cards } = this.state;
    return (
      <div className="row">
        {cards.map(card => (
          <div className="col-md-3">
            <Card
              image={card.image}
              title={card.title}
              text={card.text}
              _id={card._id}
              button="Buy"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Store;
