import React, { createContext, useEffect, useState } from "react";

export const Pagination = createContext();

function Context({ children }) {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]); // store all products
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const limit = 12; // items per page

  // fetch all products once
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/products?limit=100`); 
      const result = await res.json();
      if (result && result.products) {
        setAllData(result.products);
      }
      setLoading(false);
    } catch (error) {
      console.log("Internal server Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // search filter
  const filteredData = allData.filter((item) => {
    const searchTerm = search.toLowerCase();
    if (searchTerm === "") return true;
    return (
      item.category.toLowerCase().includes(searchTerm) ||
      item.brand.toLowerCase().includes(searchTerm) ||
      item.title.toLowerCase().includes(searchTerm)
    );
  });

  // pagination applied after search
  const start = (page - 1) * limit;
  const paginatedData = filteredData.slice(start, start + limit);

  // total pages depends on search results
  const total = Math.ceil(filteredData.length / limit);

  const Value = {
    data: paginatedData,
    page,
    setPage,
    total,
    loading,
    setSearch,
    search,
  };

  return (
    <Pagination.Provider value={Value}>{children}</Pagination.Provider>
  );
}

export default Context;
