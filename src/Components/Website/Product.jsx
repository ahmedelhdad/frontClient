import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import {addCart} from '../ReduxToolkit/slice/sliceCart'
import {addWish} from '../ReduxToolkit/slice/sliceWish'
import {useDispatch} from 'react-redux'
import axios from "axios";
import ReactImageMagnify from 'react-magnify-image';

const Product = () => {
    const [product,setProduct] =useState([])
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
          const getCate = async() => 
        {
          const respons = await axios.get(`https://rafcartpp.onrender.com/api/product/${id}`)
          setProduct(await respons.data)
        }
        getCate() 
        }
      },[id])
      
    
    
  return (
    <div className="container   overflow-hidden bg-white">
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
          italianl shape {product.category}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: product.img,
                sizes: "(max-width: 40px) 100vw, (max-width: 100px) 10vw, 30px",
              },
              largeImage: {
                src: product.img,
                width: 2000,
                height: 2000,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
              },
            }}
          />
            <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold">{product.title}</h3>
            <div className="flex items-center  mt-2">
                <div className="flex-gap-1 text-sm text-yellow-400">
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                  <span><i className="fa fa-star"></i></span>
                </div>
                <span className="text-gray-800 ml-2">({product.view})</span>
              </div>
              <div className="flex items-center space-x-3 mt-3 text-gray-600">
                <h2 className="font-bold capitalize">Availability:</h2>
                <span className="text-gray-400 text-md capitalize">{product.availability <= 0 ? 'Unavailable':'Available'}</span>
              </div>
         
              <div className="flex items-center space-x-3 mt-3 text-gray-600">
                <h2 className="font-bold capitalize">category:</h2>
                <span className="text-gray-400 text-md capitalize">{product.category}</span>
              </div>
              <div className="flex items-center space-x-3 mt-3 text-gray-600">
                <h2 className="font-bold capitalize">Sku:</h2>
                <span className="text-gray-400 text-md upercase">{product.sku}</span>
              </div>
              <div className="flex items-center space-x-3 mt-3 text-gray-600">
                <h2 className="font-bold text-primary text-xl">{`LE ${product.price}.00`}</h2>
                <span className="line-through text-sm text-gray-400 ">{product.pricerival ? `LE ${product.pricerival.toLocaleString()}.00` : ''}</span>
              </div>
              <p className="mt-3 text-gray-400 w-96">{product.aboutProduct}</p>
     
     
      <div className="mt-6 space-x-4">
        <button onClick={() => dispatch(addCart(product))} className="bg-primary py-2 px-4 border border-primary transition hover:bg-transparent text-white hover:text-gray-600 ">
            <span><i className="fas fa-shopping-bag "></i></span>
            <span className="uppercase ml-2 ">Add to cart</span>
        </button>
        <button onClick={() => dispatch(addWish(product))} className="bg-transparent py-2 px-4 border border-primary transition hover:bg-primary text-gray-600 hover:text-white">
            <span><i className="far fa-heart"></i></span>
            <span  className="uppercase ml-2 ">Add to Wish</span>
        </button>
      </div>


      <div className="flex items-center gap-3 mt-4">
        <Link to="" className="text-gray-400 hover:text-gray-500">
          <i className="fab fa-facebook-f" ></i>
        </Link>
        <Link to="" className="text-gray-400 hover:text-gray-500">
          <i className="fab fa-twitter" ></i>
        </Link>
        <Link to="" className="text-gray-400 hover:text-gray-500">
          <i className="fab fa-instagram" ></i>
        </Link>

      </div>
            </div>
      </div>
        <div className="container pb-16 space-y-6 pt-10">
            <h3 className="text-gray-800 capitalize font-bold text-xl">Product Details</h3>
            <div className="w-full md:w-3/5 mt-6">
                <div className="text-gray-600 space-y-6 ml-4">
                
                {product.description}
            </div>
            </div>
        </div>
        
    </div>
  );
};

export default Product;
