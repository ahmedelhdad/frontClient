import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { addCart } from "../ReduxToolkit/slice/sliceCart";
import { addWish } from "../ReduxToolkit/slice/sliceWish";
import { useDispatch } from "react-redux";
import ListInput from './ListInput';
import axios from 'axios'
const Shop = () => {
  const [data, setData] = useState([]);
  const [list,setList] = useState(data)
  const [loading, setLoading] = useState();
  const componentMounted = true;
  const dispatch = useDispatch();
  const [min,setMin] = useState()
  const [max,setMax] = useState()
  const [category,setCategory] = useState([
    {
      id:1,
      checked:false,
      label:'Bedroom'
    },
    {
      id:2,
      checked:false,
      label:'Sofa'
    },
    {
      id:3,
      checked:false,
      label:'Office'
    },
    {
      id:4,
      checked:false,
      label:'Outdoor'
    },
    {
      id:5,
      checked:false,
      label:'Mattress'
    },
    {
      id:6,
      checked:false,
      label:'Dinings'
    }
  ])
  useEffect(() => {
    const getCate = async () => {
      setLoading(true);
      const respons = await fetch(`https://rafcartpp.onrender.com/api/products`);

      if (componentMounted) {
        setList(await respons.clone().json());
        setData(await respons.json());
        setLoading(false);
      }
    };
    getCate();
   
  }, [componentMounted  ]);


  const handlerProducts = list.map((item) => {
    return (
      <div
        className="box-shadow-md  rounded-md shadow-md bg-white  "
        key={item._id}
      >
        <div className="relative group">
          <div className="r relative">
            <img src={item.img ? item.img : ''} alt="" className="w-full h-80" />
            {item.pricerival ? (
              <h4 className=" absolute right-0 top-0 bg-primary text-white py-1 px-2 uppercase">
                Sale
              </h4>
            ) : (
              ""
            )}
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
            {item.title? item.title.substring(0, 20) : ''}
          </h5>
          <span className="text-primary text-xl mr-2">{`LE ${item.price ? item.price : ''}`}</span>
          <span className="line-through text-sm text-gray-400">
            {item.pricerival ? `LE ${item.pricerival}` : ""}
          </span>
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
  })
  const handlerChecked = (e) => 
  {
    const categoryChecked =category.map((item) => item.id === +e.target.id ? {...item,checked:!item.checked}:item)
    setCategory(categoryChecked)
  }
  const applyFilters = () => 
  {
    let updateList = data
    const categoryChecked =category.filter((item) => item.checked).map((item) => item.label)
    if(categoryChecked.length)
    {
      updateList =updateList.filter((item) => categoryChecked.includes(item.category))
    }
    
    
    if(min && max)
    {
      updateList = updateList.filter((item) => item.price >= min && item.price <= max);
    }
    setList(updateList)
  }

  useEffect(() => {applyFilters()},[category,min,max])
  return (
    <div className='bg-white text-gray-600'>
      <div className="container flex items-center py-4 gap-3">
        <a href="../index.html" className="text-primary hover:text-gray-400 transition">
          <i className="fas fa-home"></i>
        </a>
        <div className="text-sm text-gray-400">
          <span><i className="fas fa-chevron-right"></i></span>
        </div>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      <div className="container grid grid-cols-1  lg:grid-cols-4 gap-4 pt-4 pb-16 items-start">

      <div className="col-span-1 bg-white px-4 pb-5 shadow rounded overflow-hidden">
        <div className="divide-y divide-gray-200 space-y-5">


          <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">
              categories
            </h3>

            <div className="space-y-3">
            <ListInput category={category} handlerChecked={handlerChecked}/>
              
            </div>
          </div>
    
          <div className="pt-4">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">price</h3>
            <div className="flex space-x-4 items-center">
              <input type="text" placeholder="min" onChange={(e) => setMin(e.target.value)} className="w-full px-3 py-1 text-gray-600 text-sm shadow-md rounded-md border-gray-300 focus:ring-0 focus:border-primary"/>
              <div className="mx-3 text-gray-600">-</div>
              <input type="text" placeholder="max" onChange={(e) => setMax(e.target.value)}  className="w-full px-3 py-1 text-gray-600 text-sm shadow-md rounded-md border-gray-300 focus:ring-0 focus:border-primary"/>
            </div>
          </div>
         
          

          
        </div>
      </div>


      <div className="col-span-3 ">
        <div className="flex items-center mb-4">
          <select className="text-md text-gray-600 py-3  focus:ring-primary focus:border-primary border-gray-300 shadow-sm rounded ">
            <option >Default sorting</option> 
            <option >Price low-hight</option> 
            <option >price hight-low </option> 
            <option >Latest product</option>
          </select>
          <div className="flex gap-2 ml-auto">
            <div className="border-primary border h-9 w-10 flex justify-center items-center text-white bg-primary rounded cursor-pointer">
              <i className="fas fa-th"></i>
            </div>
            <div className="border-primary border h-9 w-10 flex justify-center items-center text-gray-600  rounded cursor-pointer">
              <i className="fas fa-list"></i>
            </div>
        </div>
        </div>
        <div className="container pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          handlerProducts 
        )}
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Shop
