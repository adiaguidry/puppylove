import React from "react";

const ListGroup = ({ dogSizes, onSizeChange, currentSizeId }) => {
  return (
    <ul className="list-group m-3">
      {dogSizes.map(s => (
        <li
          key={s._id}
          onClick={() => onSizeChange(s)}
          className={
            s._id === currentSizeId
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {s.size}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
