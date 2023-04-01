import React from "react";

interface PaginationProps {
    itemsPerPage: number;
    totalCard: number;
    paginate: (pageNumber: number) => void;
}

function Pagination({
                        itemsPerPage,
                        totalCard,
                        paginate,
                    }: PaginationProps): JSX.Element {
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
