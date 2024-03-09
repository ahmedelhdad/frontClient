import axios from 'axios'
import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ShoppingInfo = () => {
    const route = useNavigate()
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const user =useSelector((state) => state.user.user)
    const [info,setInfo] = useState()
    
    const handlerData = (title) => (e) => 
    {
        setInfo({
            ...info,
            [title] : e.target.value
        })
    }
    const handlerShoping = async(e) => 
    {
        e.preventDefault();
        
        const data = {
            orderItems:cartItem,
            shippingInfo:info,
            user,
            totalPrice:totalPrice
        }
        try
        {
            const res = await axios.post('https://rafcartpp.onrender.com/order',data)
            if(res.data)
            {
                toast.success(res.data)
                route('/')
            }
        }catch(err)
        {
            console.log('err')
        }
    }
  return (
    <div className="container py-16 bg-white  ">
    <div className="max-w-lg mx-auto shadow px-6  py-14   rounded-xl relative border border-gray-400 ">
        <h2 className="text-2xl font-bold uppercase mb-1 text-gray-600 absolute left-12 -top-5 bg-white z-10 px-4 ">Shopping Info</h2>
        <form  className="space-y-4  " onSubmit={handlerShoping} >
            <div className="space-y-4">
                <label className="text-gray-600 mb-2 block" htmlFor='Address' >Address </label>
                <input type="text"  id='Address' onChange={handlerData('address')}  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 "  placeholder="Enter your address"/>
            </div>
            <div className="space-y-4">
                <label className="text-gray-600 mb-2 block" htmlFor='City' >City </label>
                <input type="text"  id='City'  onChange={handlerData('city')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 "  placeholder="Enter your City "/>
            </div>
            <div className="space-y-4">
                <label className="text-gray-600 mb-2 block" htmlFor='Phone' >Phone </label>
                <input type="text"  id='Phone' onChange={handlerData('phoneNo')}  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 "  placeholder="Enter your Phone "/>
            </div>
            <div className="space-y-4">
                <label className="text-gray-600 mb-2 block" htmlFor='postalCode' >Postal Code </label>
                <input type="text"  id='postalCode' onChange={handlerData('postalCode')}  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 "  placeholder="Enter your Postal Code "/>
            </div>
            <div className="space-y-4">
                <label className="text-gray-600 mb-2 block" htmlFor='country' >Country </label>
                <input type="text"  id='country' onChange={handlerData('country')}  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 "  placeholder="Enter your Country"/>
            </div>
       
            <button type="submit" className="w-full bg-primary py-2 text-white block border-primary border rounded hover:bg-transparent uppercase font-roboto font-medium hover:text-gray-600 ">Ok</button>
        </form>

        
  
    </div>
</div>
  )
}

export default ShoppingInfo
