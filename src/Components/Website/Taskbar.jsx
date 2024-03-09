import React,{useEffect ,useState} from "react";
import Logo from './image//logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import {getCartTotal} from '../ReduxToolkit/slice/sliceCart'
import {countItem} from '../ReduxToolkit/slice/sliceWish'
import {writeSearch} from '../ReduxToolkit/slice/sliceSearch'

const Taskbar = () => {
  const cart = useSelector((state) => state.cart.count);
  const wish = useSelector((state) => state.wish.count);
  const [value,setValue] = useState()
  const wishItem = useSelector((state) => state.wish.wishItem);
  const dispatch =useDispatch()
  const router = useNavigate()
  const cartItem = useSelector((state) => state.cart.cartItem);
  useEffect(() => {dispatch(getCartTotal())},[cartItem, dispatch])
  useEffect(() => {dispatch(countItem())},[wishItem, dispatch])
  const handlerSubmit =(e) => 
  {
    if(value)
    {
      dispatch(writeSearch(value))
      router('/search')
    }else
    {
      e.preventDefault()
    }
  }

 
  return (
    <header className="p-4 shadow-sm  overflow-hidden   ">
      <div className="container items-center justify-between flex flex-col space-y-4 xl:flex-row">
        <Link to="/">
          <img src={Logo} className="w-32" alt="" />
        </Link>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-3 top-3 text-xl text-gray-400">
            <i className="fa fa-search"></i>
          </span>
          <input
            type="text"
            className="w-full border border-primary border-r-0 py-3 pr-3 focus:outline-none rounded-l-md pl-12"
            placeholder="Search"
            onChange={(e) => setValue(e.target.value) }
          />
          <button to='/search' onClick={handlerSubmit}  className="bg-primary border border-primary flex justify-center items-center text-white hover:bg-transparent hover:text-primary px-8 transition">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to='wish'
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="far fa-heart"></i>
            </div>
            <div>Wish List</div>
            <span className="absolute right-0 top-0 w-5 h-5 rounded-full flex justify-center items-center bg-primary text-md text-white">
              {wish}
            </span>
          </Link>
          <Link
            to='cart'
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <div>Cart</div>
            <span className="absolute -right-3 top-0 w-5 h-5 rounded-full flex justify-center items-center bg-primary text-md text-white">
              {cart}
            </span>
          </Link>
          
        </div>


      </div>
    </header>
  );
};

export default Taskbar;
