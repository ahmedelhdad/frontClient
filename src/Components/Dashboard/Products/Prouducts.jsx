import React,{useState} from 'react'
import Navbar from './Navbar'
import List from './List'
const Prouducts = () => {
  const [category,setCategory] = useState()
  const [search,setSearch] = useState()
  const HandlerCategoryy = (e) => 
  {
    setCategory(e.target.value)
  }
  const handlerSearch = (e) => 
  {
    setSearch(e.target.value)
  }
  return (
    <div className="relative md:ml-64 pb-24 px-4    ">
      <Navbar HandlerCategoryy={HandlerCategoryy} handlerSearch={handlerSearch}  />
      <List category={category} search={search} />
    </div>
  )
}

export default Prouducts
