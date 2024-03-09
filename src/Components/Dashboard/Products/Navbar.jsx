import React from 'react'

const Navbar = ({HandlerCategoryy,handlerSearch}) => {
  
  return (
    <div>
      <div className='flex justify-between  gap-x-4'>
        <input type="text" onChange={handlerSearch} className='max-w-xl flex-grow ' placeholder='Search' />
        <select  onChange={HandlerCategoryy}>
          <option value='all' >All Categort</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Sofa">Sofa</option>
          <option value="Office">Office</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Mattress">Mattress</option>
          <option value="Dinings">Dinings</option>
        </select>
      </div>
    </div>
  )
}

export default Navbar
