import React from 'react'

const Pagination = ({currentPage=1, setCurrentPage, totalPages}) => {
    const createPageNumbers = () => {
        const pageNumbers = [];
        for (var i=1; i<=totalPages;i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }
  return (
    <>
    <ul className="flex justify-center items-center space-x-2 mt-2">
        {/* Previous Button */}
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
        )}
        {totalPages > 0 && createPageNumbers().map((pageNumber) => (
          <li key={'pageno:'+pageNumber}>
            <button
              onClick={() => setCurrentPage(pageNumber)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                pageNumber === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-500'
              }`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        {/* Next Button */}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </>
  )
}

export default Pagination