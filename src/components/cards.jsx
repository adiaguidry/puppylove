import React, { Component } from "react";
import Card from "./common/card";
import Blog from "./blog";
import { getCards } from "../services/cardService";

class Cards extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    const cards = getCards();
    this.setState({ cards });
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {this.state.cards.map(card => (
            <div className="col-md-4">
              <Card
                image={card.image}
                title={card.title}
                text={card.text}
                _id={card._id}
                button="Read More"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
