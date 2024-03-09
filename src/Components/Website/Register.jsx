import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Outlet, Link } from "react-router-dom";
import { storage } from '../../firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
const Register = () => {
  const [data, setData] = useState({});
  const [imageURL, setImageURL] = useState(null)
  const [loadingURL, setLoadingURL] = useState(false)
  const route = useNavigate();

  const handlerImage = (event) => {
    const file = event.target.files[0]
    const storageRef = ref(storage, `register/${Date.now()} - ${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on("state_changed", (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    }, (erro) => { console.log(erro) },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL)
          setLoadingURL(true)
          setData({
            ...data,
            img: downloadURL
          });
        })
      }

    )
  };
  const deleteHandler = () => {
    const deleteRef = ref(storage, imageURL)
    deleteObject(deleteRef).then(() => {
      setImageURL(null)
      setLoadingURL(false)
    })



  }
  const handlerForm = (title) => (event) => {
    setData({
      ...data,
      [title]: event.target.value,
    });
  };
  const handler = async (e) => {
    e.preventDefault();
    if (data.password !== data.passwordConfirm) {
      toast.error("باسورد مش مطابق");
      return;
    }
    try {

      const user = await axios.post("https://rafcartpp.onrender.com/register", data);

      if (user.data.errros) {
        user.data.errros.map((msg) => toast.info(msg.msg));
        return;
      }
      if (user.data.msg) {
        toast.info(user.data.msg);
        return;
      }
      if (user.data.token) {
        route('/login')
      }
    } catch (err) {
      console.log("faild");
    }
  };
  return (
    <div className="container py-16 bg-white">
      <div className=" max-w-lg  mx-auto shadow px-6 py-7   border border-gray-400 rounded-xl relative ">
        <h2 className="  lg:text-2xl font-bold uppercase mb-1  text-gray-500 absolute left-12 -top-3 lg:-top-5 bg-white z-10 px-4 ">
          Create an acocunt
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Register here if you dont have account
        </p>
        <form className="space-y-4" onSubmit={handler}>
          <div className="space-y-4">
            <label className="text-gray-600 mb-2 block" htmlFor="name">Full Name</label>
            <input
              type="text"
              onChange={handlerForm("name")}
              className="block w-full border border-gray-300 px-4 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0"
              placeholder="John Doe"
              id="name"
            />
          </div>
          <div className="space-y-4">
            <label className="text-gray-600 mb-2 block" htmlFor="email" >Email Address</label>
            <input
              type="email"
              onChange={handlerForm("email")}
              className="block w-full border border-gray-300 px-4 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0"
              placeholder="example@mail.com"
              id="email"
            />
          </div>
          <div className="space-y-4 relative">
            <label className="text-gray-600 mb-2 block" htmlFor="image">Image</label>

            {
              loadingURL ? (
                <div>
                  <img src={imageURL} alt="profile" className="w-full h-full  mx-auto" />
                  <div onClick={deleteHandler} className=" absolute right-0 top-0  cursor-pointer text-2xl text-red py-2 px-6">X</div>
                </div>
              ) : (
                <input
                  type="file"
                  onChange={handlerImage}
                  className="block w-full border border-gray-300 px-4 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0"
                  placeholder="Image"
                  required
                  id="image"
                />
              )
            }
          </div>
          <div className="space-y-4">
            <label className="text-gray-600 mb-2 block" htmlFor="Password">Password</label>
            <input
              type="Password"
              onChange={handlerForm("password")}
              className="block w-full border border-gray-300 px-4 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0"
              placeholder="type Password"
              id="Password"
            />
          </div>
          <div>
            <label className="text-gray-600 mb-2 block" htmlFor="Confirm Password">Confirm Password</label>
            <input
              type="password"
              onChange={handlerForm("passwordConfirm")}
              className="block w-full border border-gray-300 px-4 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0"
              placeholder="confirm your Password"
              id="Confirm Password"
            />
          </div>
          <div className="flex items-center  space-x-2 mt-6">
            <div className="flex items-center ">
              <input
                type="checkbox"
                name=""
                className="focus:ring-0 text-primary rounded-sm cursor-pointer "
                id="agreement"
                required
              />
              <label className="ml-3 text-gray-600 cursor-pointer">
                I hava reat and agrea to the{" "}
              </label>
            </div>
            <a href="s" className="text-primary capitalize">
              terms & conditions
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary py-2 text-white block border-primary border rounded hover:bg-transparent uppercase font-roboto font-medium hover:text-gray-600 "
          >
            Create account
          </button>
        </form>
        <div className="mt-6 relative flex justify-center items-center ">
          <div className=" uppercase  bg-white z-10 text-gray-600 px-2">
            Or Singup in with
          </div>
          <div className="absolute left-0 w-full border-b-2 border-gray-400 "></div>
        </div>

        <div className="text-center mt-6 text-gray-600">
          Alreafy have an account?
          <Link to="/login" className="text-primary">
            Login Now
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Register;
