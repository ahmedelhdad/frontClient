import React,{useEffect} from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import {getCartTotal ,increase ,decrease ,removeFromCart} from '../ReduxToolkit/slice/sliceCart'
const Cart = () => {
  const dispatch =useDispatch()
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const user =useSelector((state) => state.user.user)
  const router = useNavigate()
  useEffect(() => {dispatch(getCartTotal())},[cartItem, dispatch])
  const handlerCart = cartItem.map((product) => {
    return (
      <div key={product._id} className="grid grid-cols-2 pb-4 space-y-2 md:pb-0 md:space-y-0 md:grid-cols-12 text-center gap-2 shadow rounded-md items-center border border-gray-400">
        <Link to={`/product/${product._id}`} className="col-span-2  shadow bg-white py-4 px-2">
          <img src={product.img} className="w-full" alt="" />
        </Link>
        <div className="col-span-2 md:col-span-4 mx-auto">
          <h1 className="text-xl font-bold">Italianl shape   sofa</h1>
          <span className="text-gray-600">Avaliabity In stock</span>
        </div>
        <div className="col-span-2  text-primary text-lg font-bold">LE {product.price.toLocaleString()}.00</div>
        <div className="text-white col-span-2 md:col-span-1 px-12 flex justify-between  md:px-4 text-lg  border border-primary transition bg-primary  py-2  ">
          <div className=" cursor-pointer hover:text-gray-500" onClick={() => dispatch(decrease(product))}>-</div>
          <div>{product.amount}</div>
          <div className=" cursor-pointer hover:text-gray-500" onClick={() => dispatch(increase(product))}>+</div>
        </div>
        <span className="col-span-2 md:col-span-3 mx-auto cursor-pointer " onClick={() => dispatch(removeFromCart(product))}>
          <i
            className="fa fa-trash text-gray-600 hover:text-gray-500"
            aria-hidden="true"
          ></i>
        </span>
      </div>
    );
  });
  const handlerCheck = (e) =>
  {
    e.preventDefault()
    if(!user.name)
    {
      router('/login')
    }else
    {
      
      router('/ShoppingInfo')
    }
  }
  return (
    <div className="container pt-4 col-span-6 bg-white">
        {
          cartItem.length > 0 ? 
          <div>
          <div className=" shadow rounded-md items-center  border-gray-400 space-y-4">
          {handlerCart}
         </div>
          <div className="flex justify-between items-center text-xl mt-3 text-black  px-4 ">
            <div>Total Price:</div>
            <button onClick={handlerCheck} className="bg-primary px-8 text-white border border-primary hover:bg-transparent hover:text-primary transition-all py-2">Check</button>
            <div>LE {totalPrice.toLocaleString()}</div>
          </div>
          </div>
        
         :(
          <div className="container text-center text-xl h-40 flex justify-center items-center text-primary hover:text-gray-400">
            <Link to='/'>Go Shopping</Link>
          </div>
         )
        }
    </div>
  );
};

export default Cart;
