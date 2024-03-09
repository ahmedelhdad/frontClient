import React from 'react'
import { useSelector } from 'react-redux'
const Information = () => {
    const user = useSelector((state) => state.user.user)
    return (
        <div className='px-4 py-14 '>
            <div className='flex justify-center flex-col items-center relative   space-y-6 bg-gray-300 shadow-lg py-14 mt-20 rounded-xl'>
                <img src={user.img} alt="" className='w-44 h-44 rounded-full absolute  left-50% -top-[20%]' />
                <div className='py-8 space-y-4 text-center'>
                    <h1 className='text-xl font-bold capitalize'>
                    <i class="fa fa-address-card text-gray-500 mr-4" ></i>

                    {user.name}</h1>
                    <h3 className='text-md font-bold ' >
                    <i class="fa fa-envelope mr-2 text-gray-500"></i>

                    {user.email}</h3>
                    <p className=' w-1/2 mx-auto text-md'>
                    An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Information