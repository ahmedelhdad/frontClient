import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../ReduxToolkit/slice/sliceCart";
import { addWish } from "../ReduxToolkit/slice/sliceWish";
import { Link } from "react-router-dom";
import axios from "axios";
const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const searchItem = useSelector((state) => state.search.value);
  useEffect(() => {
    const getCate = async () => {
      setLoading(true);
      const respons = await axios.get("https://rafcartpp.onrender.com/api/products");
      setData(respons.data)
      setLoading(false)
    };
    getCate();
  }, []);
  const handlerSearch = data.filter((el) => el.title.includes(searchItem))
    .map((item) => {
      return (
        <div
          className="box-shadow-md  rounded-md shadow-md bg-white  "
          key={item._id}
        >
          <div className="relative group">
            <img src={item.img} alt="" className="w-full h-60" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100	 duration-300 ease-in-out flex  justify-center items-center space-x-2 transition">
              <Link
                to={`/product/${item._id}`}
                className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center text-lg hover:text-gray-800"
              >
                <i className="fas fa-search"></i>
              </Link>
              <div
                onClick={() => dispatch(addWish(item))}
                className="w-10 h-10 cursor-pointer rounded-full bg-primary text-white flex justify-center items-center text-lg hover:text-gray-800"
              >
                <i className="far fa-heart"></i>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-3 px-4">
            <h5 className="uppercase font-bold text-xl mb-2 text-gray-800 hover:text-primary transition">
              {item.title? item.title.substring(0, 20):''}
            </h5>
            <span className="text-primary text-xl mr-2">{`$${item.price?item.price.toLocaleString():'0'}.00`}</span>
            <span className="line-through text-sm text-gray-400">{`$${item.pricerival.toLocaleString()}.00`}</span>
            <div className="flex items-center  mt-2">
              <div className="flex-gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <span className="text-gray-800 ml-2">({item.view})</span>
            </div>
          </div>
          <button
            onClick={() => dispatch(addCart(item))}
            className="block mt-4 bg-primary hover:text-primary w-full py-2 rounded-b text-white border mb-10 border-primary hover:bg-transparent transition"
          >
            Add to Cart
          </button>
        </div>
      );
    });
  return (
    <div className="bg-white">
      {loading ? (
        <div className="container flex justify-center py-4 w-screen bg-white">
          <div className="loading ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : handlerSearch.length >= 1 ? (
        <div className="container py-4 grid grid-cols-3 gap-4">
          {handlerSearch}
        </div>
      ) : (
        <div className="container h-40 flex text-xl text-gray-600 items-center justify-center">
          Dont Founded
        </div>
      )}
    </div>
  );
};

export default Search;
