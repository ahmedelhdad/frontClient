import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { addCart } from "../ReduxToolkit/slice/sliceCart";
import { addWish } from "../ReduxToolkit/slice/sliceWish";
import { useDispatch } from "react-redux";
const PageProducts = () => {
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const componentMounted = true;
    const {category} = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
    const getCate = async () => {
      setLoading(true);
      const respons = await fetch(`https://rafcartpp.onrender.com/api/${category}`);

      if (componentMounted) {
        setData(await respons.json());
        setLoading(false);
        // console.log(await respons.json())
      }
    };
    getCate();
  }, [componentMounted,category]);
  const handler = data.map((item) => {
      return (
        <div
          className="box-shadow-md  rounded-md shadow-md bg-white  "
          key={item._id}
        >
          <div className="relative group">
          <div className="r relative">
              <img src={item.img ? item.img : ''} alt="" className="w-full h-80" />
              {
                item.pricerival ? <h4 className=" absolute right-0 top-0 bg-primary text-white py-1 px-2 uppercase">Sale</h4> :''
              }
            </div>
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
              {item.title ? item.title.substring(0,20) : ''}
            </h5>
            <span className="text-primary text-xl mr-2">{`LE ${item.price ? item.price : ''}`}</span>
            <span className="line-through text-sm text-gray-400">{item.pricerival ? `LE ${item.pricerival}` : ''}</span>
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
              <span className="text-gray-800 ml-2">({item.view ? item.view : ''})</span>
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
     
    <div className="container bg-white">
    <div className=" flex items-center py-4 gap-3">
        <Link to="/" className="text-primary hover:text-gray-400  transition">
          <i className="fas fa-home"></i>
        </Link>
        <div className="text-sm text-gray-400">
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </div>
        <p className="text-gray-600 font-medium uppercase">
          italianl shape {category}
        </p>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? <div className='container flex justify-center py-4 w-screen'>
        <div className="loading ">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
        </div> : handler}
    </div>
    </div>
  )
}

export default PageProducts
