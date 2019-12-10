import React, { Component } from "react";
import { Link } from "react-router-dom";
import BlogFullPage from "./common/blogFullPage";
import { getCards } from "../services/cardService";

class Blog extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    const cards = getCards();
    this.setState({ cards });
  }

  handleReadMore = card => {
    console.log(card);
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-4">Blog</h1>
        {this.state.cards.map(card => (
          <React.Fragment>
            <div key={card._id} className="row">
              <div key={card._id} className="col-md-7">
                <img
                  className="img-fluid rounded mb-3 mb-md-0"
                  src={card.imageLandscape}
                  alt=""
                />
              </div>
              <div key={card._id} className="col-md-5">
                <h3>{card.title}</h3>
                <p>
                  {card.text} Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Laudantium veniam exercitationem expedita
                  laborum at voluptate. Labore, voluptates totam at aut nemo
                  deserunt rem magni pariatur quos perspiciatis atque eveniet
                  unde.
                </p>
                <Link
                  to={`/blogFullPage/${card._id}`}
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Blog;
