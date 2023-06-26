import React from "react";

const Filter = ({handleFilter}) => {
  return (
    <>
      <div className="pt-5">
        <div className="flex items-center space-x-2">
          <div
            className="border border-gray-600 rounded-full p-4 flex items-center 
      space-x-2 w-full"
          >
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              placeholder="Search by name or email"
              className="w-full border-none outline-none hover:outline-none 
        placeholder:text-gray-700"
            />
          </div>

          <div className=" bg-gray-200 rounded-full flex items-center justify-center p-3 text-blue-900">
            <i class="fa-solid fa-download"></i>
          </div>
        </div>

        <div className="py-2">
          <h2 className="text-gray-600 font-bold">Filter by</h2>

          <div className="pt-2 flex items-start space-x-3">
            <button className="activeBtn" onClick={(e) => handleFilter(e, "date")}>
                Date: Last 90 days 
            </button>

            <button className="filterBtn" onClick={(e) => handleFilter(e, 'type')}>Type</button>
            <button className="filterBtn" onClick={(e) => handleFilter(e, 'status')}>Status</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
