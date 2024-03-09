import React, { useEffect ,useState} from 'react'

const User = () => {
  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState();
  const componentMounted = true;
  useEffect(() => {
    const getApi = async () => 
    {
      setLoading(true)
      const respons = await fetch('https://rafcartpp.onrender.com/data/user')
      if (componentMounted) {
        setUsers(await respons.json());
        setLoading(false)
      }
    }
    getApi()
  },[componentMounted])
  const handlerUser = users.map((user) => {
    return(
      <div key={user._id}>
        <div className=' p-4 flex justify-center relative'>
          <div className=' absolute left-0 -z-10  bg-red w-full h-1/2'></div>
          <img src={user.img} alt=""  className='w-32 h-32 mt-4 bg-white p-2 rounded-full'/>
        </div>
        <div className='text-center space-y-2'>
          <h1 className='capitalize text-2xl'>{user.name}</h1>
          <h1>{user.role ?'Admin':'Customer'}</h1>
          <div className='text-blue-600'>{user.email}</div>
   
          
        </div>
      </div>
    )
  })
  return (
    <div className='md:ml-64 pb-24 px-4   '>
                    <h1 className='text-center text-4xl font-bold py-2'>Users</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
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
                  handlerUser
                )}
      </div>
    </div>
  )
}

export default User
