import React from "react";

function Pagination({ itemsPerPage, totalCard, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCard / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__inner">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
