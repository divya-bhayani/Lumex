import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RxDotsHorizontal } from "react-icons/rx";

import { DOTS, usePagination } from "../../../Utils/Hook/usePagination";
import Select from "../Filters/Select";
import "../../../Aseets/Css/Pagination.css";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    parPage,
    onPerPageChange,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) {
      return false;
    }
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) {
      return false;
    }
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
      <div className="custom-table-pagination">
        <ul className="pagination">
          <li
            className={currentPage === 1 ? "page-item disabled " : "page-item"}
            onClick={onPrevious}
          >
            <span className="page-link">
              <MdChevronLeft size={20} />
            </span>
          </li>
          {paginationRange.map((pageNumber, i) => {
            if (pageNumber === DOTS) {
              return (
                <li key={i} className="page-item dots">
                  <span className="page-link">
                    <RxDotsHorizontal />
                  </span>
                </li>
              );
            }
            return (
              <li
                key={i}
                className={
                  pageNumber === currentPage ? "page-item active" : "page-item"
                }
                onClick={() => onPageChange(pageNumber)}
              >
                <span className="page-link">{pageNumber}</span>
              </li>
            );
          })}
          <li
            className={
              currentPage === lastPage ? "page-item disabled" : "page-item"
            }
            onClick={onNext}
          >
            <span className="page-link">
              <MdChevronRight size={20} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
