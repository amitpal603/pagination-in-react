import React, { useContext } from "react";
import { FaFilter } from "react-icons/fa";
import { Pagination } from "../context/Context";

function Feature() {
    const {setSearch} = useContext(Pagination)
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-100 rounded-xl shadow-md">
      
      {/* Search Input */}
      <div className="flex items-center w-full sm:w-1/2 bg-white rounded-lg shadow-sm px-3 py-2">
        <input
          type="text"
          placeholder="Search for Product"
          onChange={(e) => setSearch(e.target.value) }
          className="w-full outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Dropdown with Filter Icon */}
      <div className="flex items-center gap-2 bg-white rounded-md sm:w-auto h-15 w-40 shadow-lg">
        <FaFilter className="text-gray-600 ml-2" />
        <select className="px-3 py-2 rounded-lg border border-gray-300 mr-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="800">800</option>
          <option value="1000">1000</option>
          <option value="1500">1500</option>
          <option value="2000">2000</option>
        </select>
      </div>
    </div>
  );
}

export default Feature;
