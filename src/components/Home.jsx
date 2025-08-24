import React, { useContext, useState } from "react";
import { Pagination } from "../context/Context";
import ShimmerEffect from "./ShimmerEffect";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdCloudyNight } from "react-icons/io";

function Home() {
  const { data, page, setPage, total, loading,filterData } = useContext(Pagination);
console.log(data);

  const Selection = (select) => {
    if (select >= 1 && select <= total && select !== page) {
      setPage(select);
    }
  };
  const [dark,setDark] = useState(false)
  const datNight = () => {
     setDark(!dark)
  }
  return (
    <div className={`min-h-screen  py-8 px-4 ${dark ? 'bg-gray-800 ':'bg-white'}`}>
       <button onClick={() => datNight()} className={` ${dark ? 'text-gray-500 bg-white':''} text-2xl h-15 w-15 rounded-full shadow-lg flex justify-center items-center`}>{dark ? <MdOutlineLightMode/>:<IoMdCloudyNight/>}</button>
      {/* Loader or Product Grid */}
      {loading ? (
        <ShimmerEffect  dark={dark}/>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterData.length > 0 ? (
            (filterData.map((item) => (
               <div
              key={item.id}
              className={`${dark ? 'hover:shadow-lg hover:shadow-gray-400':''} bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow`}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105 cursor-pointer"
              />
              <div className={`p-4 ${dark ? 'bg-gray-600 text-white':''}`}>
                <h3 className="text-lg font-semibold  truncate">
                  {item.title}
                </h3>
                <p className="text-sm  mt-2 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">
                    ${item.price}
                  </span>
                  <span className="text-yellow-500 font-medium">
                    ⭐ {item.rating}
                  </span>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
            )))
          ):(
            <p className="text-2xl text-red-500 ml-100 w-full flex justify-center items-center font-bold text-center">Product not found</p>
          )}
        </div>
      )}
      <div>
       
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {/* Prev Button */}
        <button
          disabled={page === 1 || loading}
          onClick={() => Selection(page - 1)}
          className={`px-3 py-1 rounded-md border transition ${
            page === 1 || loading
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-indigo-600 border-indigo-300 hover:bg-indigo-100"
          }`}
        >
          ◀
        </button>

        {/* Page Numbers */}
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => Selection(i + 1)}
            disabled={loading}
            className={`px-3 py-1 rounded-md border transition ${
              page === i + 1
                ? "bg-indigo-600 text-white border-indigo-600"
                : "text-indigo-600 border-indigo-300 hover:bg-indigo-100"
            } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={page === total || loading}
          onClick={() => Selection(page + 1)}
          className={`px-3 py-1 rounded-md border transition ${
            page === total || loading
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "text-indigo-600 border-indigo-300 hover:bg-indigo-100"
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Home;
