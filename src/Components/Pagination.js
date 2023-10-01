import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="p-5 flex justify-end gap-3 mx-5 py-10 ">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>&lt; Previous</button>
      )}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className=  {currentPage === page ? 'active' : 'btn'}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next &gt;</button>
      )}
    </div>
  );
}

export default Pagination;
