import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
const Gallery = () => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState();
  const componentMounted = true;
  useEffect(() => {
    const getCate = async() => 
    {
      setLoading(true)
      const respons = await fetch('https://rafcartpp.onrender.com/category')
      if(componentMounted)
      {
        setData(await respons.json())
        setLoading(false)
      }
    }
    getCate()
  },[componentMounted])
  const handler = data.map((item) => {
    return(
        <div className="relative rounded-md overflow-hidden group" key={item._id}>
          <img src={item.img} alt='Gallery' className="w-full"/>
          <Link to={`page/${item.title}`} className="absolute inset-0 to font-roboto bg-black bg-opacity-40 hover:bg-opacity-60 transition ease-in-out flex items-center justify-center text-white text-xl font-medium">{item.title}</Link>
        </div>
    )
  })
  return (
    <div className="container py-16">
      <h2 className="uppercase font-medium mb-6  text-3xl text-gray-800">Shop By Category</h2>  
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

      {loading ? <div className='container flex justify-center py-4 w-screen'>
      <div className="loading ">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
      </div>:handler}
    </div>
    </div>
  )
}

export default Gallery