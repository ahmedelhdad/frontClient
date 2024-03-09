import React, { useState,useEffect } from 'react'
import CardStats from './CardStats';

const HeaderStats = ({admin,totalSales}) => {
  const [sales,setSales] = useState()
  const [orders,setOrsers] = useState(0)
  const [products,setProducts] = useState(0)
  const [users,setUsers] = useState(0)
  useEffect(() => {
    setOrsers(admin.totalOrders)
    setProducts(admin.product)
    setUsers(admin.users)  
    // totalSales.map((item) => console.log(item))  
  // eslint-disable-next-line array-callback-return
  let {totalsales} = totalSales.reduce((order,item) => {
    const {totalPrice} = item
    order.totalsales += totalPrice
     return order
  },{
    totalsales:0
  })
  setSales(totalsales)
  },[admin.product, admin.totalOrders, admin.users, totalSales])
  
  return (
    <>
      {/* Header */}
      <div className="relative  bg-slate-400 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10  mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="grid grid-cols-1 gap-2  md:grid-cols-2 xl:grid-cols-4">
              <div >
                <CardStats
                  statSubtitle="Total Sales"
                  statTitle={sales}
                  statPercentColor="text-emerald-500"
                  statIconColor="bg-blue-200"
                  statIconName="fas fa-usd text-blue-800"
                />
              </div>
              <div >
                <CardStats
                  statSubtitle="Total Orders"
                  statTitle={orders}
                  statPercentColor="text-emerald-500"
                  statIconColor="bg-gray-300"
                  statIconName="fa fa-shopping-bag text-gray-600"
                />
              </div>
              <div >
                <CardStats
                  statSubtitle="Total Products"
                  statTitle={products}
                  statPercentColor="text-emerald-500"
                  statIconColor="bg-orange-200"
                  statIconName="fa fa-cart-arrow-down text-orange-600"
                />
              </div>
              <div >
                <CardStats
                  statSubtitle="Users"
                  statTitle={users}
                  statPercentColor="text-emerald-500"
                  statIconColor="bg-blue-500"
                  statIconName="fa fa-users"
                />
              </div>
              
          
        
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderStats
