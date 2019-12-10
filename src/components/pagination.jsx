import React from "react";
import _lodash from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ count, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(count / pageSize);
  //if there is only 1 page dont inlcude pagination
  if (pagesCount === 1) return null;
  const pages = _lodash.range(1, pagesCount + 1);

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
