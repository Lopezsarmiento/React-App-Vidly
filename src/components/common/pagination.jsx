/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log('currentpage', currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize); // Math.ceil round up number
  const pages = _.range(1, pagesCount + 1);

  // if only 1 page do NOT show pagination
  //if (pagesCount === 1) return null;

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pages.map(page => (
          <li key={page} className={(page === currentPage) ? 'page-item active' : 'page-item'}>
            <a
              className="page-link"
              onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// type Checking with propTypes
Pagination.propTypes = {
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
}

export default Pagination;