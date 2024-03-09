import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

const Order = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState();
  const componentMounted = true;
  useEffect(() => {
    const getCate = async () => {
      setLoading(true)
      const respons = await fetch("https://rafcartpp.onrender.com/order");
      if (componentMounted) {
        setData(await respons.json());
        setLoading(false)
      }
    }
    getCate();
  }, [componentMounted])


  const handler = (id) => async () => {

    try {
      const respons = await axios.put("https://rafcartpp.onrender.com/order/update", { id: id });
      if (respons.data === 'Succ') {

        toast.success(respons.data)
        window.location.reload()
      } else {
        toast.success(respons.data)
      }

    } catch (err) {
      toast.error('Error')
    }
  }
  const handlerOrder = data.map((or) => {
    return (
      <div key={or._id} className='grid grid-cols-6 mt-8 text-center'>
      
        <div className='flex items-center mx-auto'>
          <img src={or.user.img} className=' xl:w-14 h-14 rounded-full' alt="" />
          <span className='capitalize'>{or.user.name}</span>
        </div>
        <div className=' capitalize'>{or.shippingInfo.address}</div>
        <div className=' '>{or.shippingInfo.phoneNo}</div>
        <div className=' flex-wrap  flex   '>
          {
            or.orderItems.map((item) => <img src={item.img} alt="" key={item._id} className=' rounded-full w-10 h-10' />)

          }
        </div>
        <div>{`LE ${or.totalPrice.toLocaleString()}.00`}</div>
        <div >
          <div onClick={handler(or._id)} className={`${or.status === 'preparing' ? 'bg-rose-200 transition-all border border-rose-400 hover:bg-transparent text-rose-800' : 'bg-blue-300 text-blue-900 transition-all border border-blue-600 hover:bg-transparent'} cursor-pointer capitalize text-center rounded-full py-2`}>
            {or.status}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='md:ml-64 pb-24 px-4  '>
    <h1 className='text-center text-4xl font-bold py-4'>Orders</h1>
      <div className=''>
        <div className='w-full ' >
          <div className='text-md grid grid-cols-6 text-center'>
            <div>Customer</div>
            <div>Address</div>
            <div className='hidden xl:block bg-bla'>Phone</div>
            <div className='hidden xl:block'>Products</div>
            <div>Total Price</div>
            <div>Status </div>
          </div>
          {loading ? (
                    <div className='container  mx-80'>
                        <div className="loading ">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                ) : (
                  handlerOrder
                )}
        </div>
      </div>
    </div>
  )
}

export default Order
