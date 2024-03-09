import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from "react-toastify";
import { useNavigate, Outlet, Link } from 'react-router-dom';
const Login = () => {
    const [data, setData] = useState()
    const route = useNavigate()

    const handler = (title) => (event) => {
        setData({
            ...data,
            [title]: event.target.value,
        });
    }
    const handlerForm = async (e) => {
        e.preventDefault();
        try {
            const user = await axios.post('https://rafcartpp.onrender.com/login', data)
            if (user.data.error) {
                user.data.error.map((msg) => toast.info(msg.msg))
                return;
            }
            if (user.data.msg) {
                toast.error(user.data.msg)
            }
            if (user.data.token) {

                window.localStorage.setItem('token',JSON.stringify(user.data.token))
                route('/')

            }
        } catch
        {
            console.log('Faild')
        }
    }
    

    return (
        <div className="container py-16 bg-white">
            <div className="max-w-lg mx-auto shadow px-6  py-14   rounded-xl relative  border border-gray-400">
                <h2 className="text-3xl font-bold uppercase mb-1 text-gray-600 absolute left-12 -top-5 bg-white z-10 px-4 ">Login</h2>
                <p className="text-gray-600 mb-6 text-sm">login if you are a returing customer</p>
                <form className="space-y-4" onSubmit={handlerForm}>
                    <div className="space-y-4">
                        <label className="text-gray-600 mb-2 block" htmlFor='email' >Email address</label>
                        <input type="text" id='email' onChange={handler("email")} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder="Enter your Email address" />
                    </div>
                    <div>
                        <label className="text-gray-600 mb-2 block" htmlFor='password'>Password</label>
                        <input type="password" id='password' onChange={handler("password")} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0" placeholder="Enter your Password" />
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center ">
                            <input type="checkbox" name='agreement' className="focus:ring-0 text-primary rounded-sm cursor-pointer " id="agreement" />
                            <label className="ml-3 text-gray-600 cursor-pointer">Remember Me</label>
                        </div>
                        <a href="s" className="text-primary capitalize">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full bg-primary py-2 text-white block border-primary border rounded hover:bg-transparent uppercase font-roboto font-medium hover:text-gray-600 ">Login</button>
                </form>
                <div className="mt-6 relative flex justify-center items-center ">
                    <div className=" uppercase  bg-white z-10 text-gray-600 px-2">Or login with</div>
                    <div className="absolute left-0 w-full border-b-2 border-gray-400 "></div>
                </div>
           
                <div className="text-center mt-6 text-gray-600">
                    Dont Have an account?
                    <Link to="/register" className="text-primary">Register Now</Link>
                </div>
                <Outlet />
            </div>
        </div>

    )
}

export default Login