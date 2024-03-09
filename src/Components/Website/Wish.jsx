import React from 'react'
import { useEffect } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {addCart} from '../ReduxToolkit/slice/sliceCart'
import {removeItem,countItem} from '../ReduxToolkit/slice/sliceWish'
import { Link } from 'react-router-dom';
const Wish = () => {
    const dispatch = useDispatch()
    const wishItem = useSelector((state) => state.wish.wishItem)
    useEffect(() => {dispatch(countItem())},[wishItem, dispatch])
    const handlerWish = wishItem.map((product) => {
        return (
          <div key={product._id} className="grid grid-cols-2 bg-white pb-4 space-y-2 md:pb-0 md:space-y-0 md:grid-cols-12 text-center gap-2 shadow rounded-md items-center border border-gray-400">
            <Link to={`/product/${product._id}`} className="col-span-2  shadow bg-white py-4 px-2">
              <img src={product.img} className="w-full" alt="" />
            </Link>
            <div className="col-span-2 md:col-span-3 mx-auto">
              <h1 className="text-xl font-bold">Italianl shape   sofa</h1>
              <span className="text-gray-600">Avaliabity In stock</span>
            </div>
            <div className="col-span-2  text-primary text-lg font-bold">LE {product.price.toLocaleString()}.00</div>
            <div onClick={() => dispatch(addCart(product))} className="text-white col-span-2 max-w-md mx-auto px-4  cursor-pointer border border-primary transition bg-primary  py-2  ">
                Add to Cart
            </div>
            <span onClick={() => dispatch(removeItem(product))} className="col-span-2 md:col-span-3 mx-auto cursor-pointer " >
              <i
                className="fa fa-trash text-gray-600 hover:text-gray-500"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        );
      });
  return (
    <div className="container pt-4 bg-white">
        
          {
            wishItem.length >= 1 ? <div className=" shadow rounded-md items-center  border-gray-400 space-y-4">
            {handlerWish}
           </div> :
           (
            <div className="container text-center text-xl h-40 flex justify-center items-center text-primary hover:text-gray-400">
              <Link to='/'>Go Wish</Link>
            </div>
           )
          }
   
    </div>
  )
}

export default Wish