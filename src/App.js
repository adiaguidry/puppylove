import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Puppies from "./components/puppies";
import Nav from "./components/navbar";
import SignUp from "./components/signup";
import Home from "./components/home";
import Blog from "./components/blog";
import Store from "./components/store";
import BlogFullPage from "./components/common/blogFullPage";
import "./App.css";

class App extends Component {
  state = {
    puppies: []
  };

  render() {
    return (
      <main className="container">
        <Nav />
        <Switch>
          <Route path="/puppies" component={Puppies} />
          <Route path="/blogFullPage/:_id" component={BlogFullPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/signup" component={SignUp} />
          <Route path="/store" component={Store} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}
export default App;
