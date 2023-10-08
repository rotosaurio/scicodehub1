import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-64 mx-auto mt-10">
      <div className="relative text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          className="w-full h-10 pl-10 pr-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="absolute left-0 top-0 mt-3 ml-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
