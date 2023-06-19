import classNames from 'classnames';
import React from 'react';
import { MoveButton } from '../MoveButton';
import './Pagination.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const rangeSize = 4;
  const pageRange: number[] = [];

  let rangeStart = Math.max(1, currentPage - Math.floor(rangeSize / 2));
  const rangeEnd = Math.min(rangeStart + rangeSize - 1, totalPages);

  rangeStart = Math.max(1, rangeEnd - rangeSize + 1);

  for (let i = rangeStart; i <= rangeEnd; i += 1) {
    pageRange.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination__wraper">
        <MoveButton
          isDisabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          direction="left"
        />

        <div className="pagination__buttons">
          {pageRange.map((page) => {
            return (
              <button
                key={page}
                className={classNames('pagination__button', {
                  'pagination__button--default': page !== currentPage,
                  'pagination__button--active': page === currentPage,
                })}
                type="button"
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            );
          })}
        </div>

        <MoveButton
          isDisabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          direction="right"
        />
      </div>
    </div>
  );
};
