import React from "react";
import Sidebar from "./Sidebar";
import Admin from './Admin'
import Prouducts from "./Products/Prouducts";
import ProductEdit from "./Products/ProductEdit";
import AddProduct from "./Products/AddProduct";
import Order from "./Order";
import User from "./User";
import { useSelector } from "react-redux";

const Deshboard = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <div className="ml-64 px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl capitalize font-bold">{user.name}</h1>
        <img src={user.img} alt="" className="w-10 h-10 rounded-full" />
      </div>
      <Sidebar />
    </>
  );
};

export { Admin, Prouducts, ProductEdit, AddProduct, Order,User }
export default Deshboard;
