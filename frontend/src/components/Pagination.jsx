import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
const PaginationIt = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="d-flex container justify-content-center my-2">
      <GrLinkPrevious className="mt-2" />
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item ">
            <div
              onClick={() => paginate(number)}
              className="page-link pagination-link"
              style={{ cursor: "pointer" }}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
      <GrLinkNext className="mt-2" />
    </nav>
  );
};

export default PaginationIt;
