import React,{useEffect,useState} from 'react'
import CardPageVisits from "./Cards/CardPageVisits";
import CardSocialTraffic from "./Cards/CardSocialTraffic";
import HeaderStats from "./HeaderStats";

const Admin = () => {
  const [admin,setAdmin] = useState([])
  const [totalSales,setTotalSales] = useState([])
  useEffect(() => {
    const getres = async () => 
    {
      const admin = await fetch('https://rafcartpp.onrender.com/api/app/admin')
      const totalSales = await fetch('https://rafcartpp.onrender.com/order')
      setAdmin(await admin.json())
      const total = await totalSales.json()
      const data=  total.filter((item) =>  item.status === 'finish')
      setTotalSales(data)
    }
    getres()
  },[])
  // console.log(typeof admin.allOrders)
  return (
    <>
      <div className="relative md:ml-64  pb-24 px-4 gap-x-4   ">
      <HeaderStats admin={admin} totalSales={totalSales}  />
      </div>

      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  )
}

export default Admin