import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const List = ({ category , search }) => {
    const [data, setData] = useState([]);
    const [listData, setListData] = useState(data)
    const [loading, setLoading] = useState();
    const componentMounted = true;
    useEffect(() => {
        const getCate = async () => {
            setLoading(true);
            const respons = await fetch(`https://rafcartpp.onrender.com/api/products`);

            if (componentMounted) {
                setListData(await respons.clone().json());
                setData(await respons.json());
                setLoading(false);
            }
        };
        getCate();
    }, [componentMounted]);
    const handlerDelete = async (id) => {
        const res = await axios.post('https://rafcartpp.onrender.com/api/delete/product', { id: id })
        if (res.data) {
            window.location.reload()
            toast.success(res.data)
        }
    }
    const HandlerCatgory = () => {
        let updataCategory = data

        if (category === 'all') {

            // eslint-disable-next-line no-self-assign
            updataCategory = updataCategory
        } else {
            // eslint-disable-next-line no-unused-vars
            updataCategory = updataCategory.filter((item) => item.category === category)

        }
        if(search && category)
        {
            updataCategory = updataCategory.filter((item) => item.title.includes(search))
        }
        else if(!search && !category)
        {
            updataCategory = data
        }else if(search)
        {
            updataCategory = data.filter((item) => item.title.includes(search))
        }

        setListData(updataCategory)
    }
    useEffect(() => { HandlerCatgory() }, [category , search])
    const handlerProducts = listData.map((item) => {
        return (
            <div key={item._id}>
                <img src={item.img} alt="" className='h-60' />
                <div className='font-bold'>
                    <h5>{item.title ? item.title.substring(0,16) : ''}</h5>
                    <h5>${item.price ?item.price : ''}</h5>
                </div>
                <div className='flex justify-between gap-4 pt-2'>
                    <Link to={`/admin/prouducts/${item._id}`} className='bg-primary w-full border text-center border-primary hover:bg-transparent'>Edit</Link>
                    <button className='bg-primary w-full border border-primary hover:bg-transparent' onClick={() => handlerDelete(item._id)}>Delete</button>
                </div>

            </div>
        )
    })
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 py-4'>
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
            <Outlet />

        </>

    )
}

export default List
