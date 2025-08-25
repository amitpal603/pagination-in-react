import React, { createContext, useEffect, useState } from "react";

export const Pagination = createContext();

function Context({ children }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true); // start loading
      const res = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${page * 12 - 12}`
      );
      const result = await res.json();
      if (result && result.products) {
        setData(result.products);
        setTotal(Math.ceil(result.total / 20));
      }
      setLoading(false)
    } catch (error) {
      console.log("Internal server Error", error);
    } 
    
  };

  // search section
const [search,setSearch] = useState("")
  const filterData = data.filter((data) => {
    const searchTerm = search.toLowerCase()

    if(searchTerm === "") return true

    return (
      data.category.toLowerCase().includes(searchTerm) ||
      data.brand.toLowerCase().includes(searchTerm) ||
      data.title.toLowerCase().includes(searchTerm) 
    )
  })

  useEffect(() => {
    fetchData();
  }, [page]);

  const Value = { data, page, setPage, total, loading,setSearch,filterData};

  return (
    <Pagination.Provider value={Value}>{children}</Pagination.Provider>
  );
}

export default Context;
