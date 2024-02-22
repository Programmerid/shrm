import React from 'react';

const Pagination = ({ newsPerPage, totalNews, paginate, currentPage }) => {
    const totalPages = Math.ceil(totalNews / newsPerPage);
  
    // Генерация порядковых номеров страниц
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage - 1)} className='page-link' disabled={currentPage === 1}>
              {'<'}
            </button>
          </li>
  
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button onClick={() => paginate(number)} className='page-link'>
                {number}
              </button>
            </li>
          ))}
  
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button onClick={() => paginate(currentPage + 1)} className='page-link' disabled={currentPage === totalPages}>
              {'>'}
            </button>
          </li>
        </ul>
      </nav>
    );
  };

export default Pagination;
