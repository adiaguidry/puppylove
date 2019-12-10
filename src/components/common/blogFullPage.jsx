import React, { Component } from "react";
import { getCard, getCards } from "../../services/cardService";

class BlogFullPage extends Component {
  state = {
    card: {},
    allCards: []
  };

  componentDidMount() {
    const card = getCard(this.props.match.params._id);
    const allCards = getCards();
    this.setState({ card, allCards });
  }

  render() {
    const { image, title, text } = this.state.card;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="my-3">{title}</h1>
          </div>
          <div className="col-md-12">
            <img
              width="30%"
              src={image}
              alt=""
              className="m-3 float-left img-fluid"
            />
            <h5>{text}</h5>
            <p>
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
            </p>
            <h5>sint temporibus</h5>
            <p>
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
            </p>
            <h5>ipsum dolor sit amet</h5>
            <p>
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
            </p>
            <p>
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
            </p>
            <h5>ipsum amet</h5>
            <p>
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
            </p>
            <p>
              {text}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dolores sint temporibus doloremque excepturi recusandae animi
              minus consequatur culpa asperiores iusto facere quidem impedit,
              ducimus, et enim quibusdam. Maiores, voluptatum quia.
            </p>
          </div>
        </div>
        <h3 class="my-4">Related Blogs</h3>
        <div className="row">
          {this.state.allCards.map(c => (
            <div class="col-md-3 col-sm-6 mb-4">
              <img className="img-fluid" src={c.imageLandscape} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogFullPage;
