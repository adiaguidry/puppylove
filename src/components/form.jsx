import React, { Component } from "react";

const Form = ({ data: puppies, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Breed</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Rate</th>
        </tr>
      </thead>
      <tbody>
        {puppies.map(puppy => (
          <tr key={puppy._id}>
            <td>{puppy.breed}</td>
            <td>{puppy.name}</td>
            <td>{puppy.age}</td>
            <td>{puppy.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => onDelete(puppy)}
                className="btn btn-danger btn-sm"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Form;
