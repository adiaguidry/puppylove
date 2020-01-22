import React, { Component } from "react";
import { getPuppies } from "../services/puppyService";
import { getSizes } from "../services/sizesService";
import Form from "./form";
import Pagination from "./pagination";
import { paginate } from "../ultil/pagination";
import ListGroup from "./listGroup";

class Puppies extends Component {
  state = {
    puppies: [],
    pageSize: 4,
    currentPage: 1,
    dogSizes: [],
    currentSizeId: ""
  };

  componentDidMount() {
    const puppies = getPuppies();
    const dogSizes = [{ _id: "", size: "All Sizes" }, ...getSizes()];
    this.setState({ puppies, dogSizes });
  }

  // arrow function binds this method to the constructor to get access to current object
  handleDelete = puppy => {
    const puppies = this.state.puppies.filter(p => p._id !== puppy._id);
    this.setState({ puppies, currentPage: 1 });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSizeChange = size => {
    const currentSizeId = size._id;
    this.setState({ currentSizeId, currentPage: 1 });
    console.log(size);
  };

  render() {
    const { length: count } = this.state.puppies;
    const {
      puppies: allPuppies,
      currentPage,
      pageSize,
      dogSizes,
      currentSizeId
    } = this.state;

    let filteredPuppies = allPuppies;

    if (currentSizeId !== "")
      filteredPuppies = allPuppies.filter(p => p.dog._id === currentSizeId);
    console.log(filteredPuppies.length);
    const puppies = paginate(filteredPuppies, currentPage, pageSize);

    if (puppies.length === 0)
      return <p>Sorry there are no puppies at this time</p>;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3">
            <ListGroup
              dogSizes={dogSizes}
              onSizeChange={this.handleSizeChange}
              currentSizeId={currentSizeId}
            />
          </div>
          <div className="col-md-9">
            <p> Showing {filteredPuppies.length} puppies in the love bank.</p>
            <Form data={puppies} onDelete={this.handleDelete} />
            <Pagination
              count={filteredPuppies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Puppies;
