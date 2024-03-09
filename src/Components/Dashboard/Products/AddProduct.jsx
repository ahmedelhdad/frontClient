import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ref, getDownloadURL, deleteObject, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../firebaseConfig'
const AddProduct = () => {
    const [product, setProduct] = useState()
    const [imageURL, setImageURL] = useState(null)
    const [loadingURL, setLoadingURL] = useState(false)

    const handlerProduc = (title) => (e) => {
        setProduct({
            ...product,
            [title]: e.target.value
        })
    }
    const handlerImage = (e) => {
        const file = e.target.files[0]
        const storageRef = ref(storage, `products/${Date.now()} - ${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on("state_changed", (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (err) => { console.log(err) },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setProduct({
                        ...product,
                        img: downloadURL
                    })
                    setImageURL(downloadURL)
                    setLoadingURL(true)

                })
            }
        )
    }
    const deleteHandler = () => {
        const deleteRef = ref(storage, imageURL)
        deleteObject(deleteRef).then(() => {
            setImageURL(null)
            setLoadingURL(false)
        })



    }
    const handlerForm = async (e) => {
        e.preventDefault()
        try {


            const respons = await axios.post('https://rafcartpp.onrender.com/api/products', product)

            if (respons.data) {

                window.location.reload()
                toast.success(respons.data)
            }

        } catch (err) {
            console.log('err')
        }
    }

    return (
        <div className="relative md:ml-64 pb-24 px-4    ">
            <div>
                <h1 className='text-center text-4xl font-bold py-2'>Add Product</h1>
            </div>
            <form className="space-y-4" onSubmit={handlerForm}>
                <div className="space-y-4">
                    <label className="text-gray-600 mb-2 block" htmlFor='Title' >Title</label>
                    <input type="text" id='Title' required onChange={handlerProduc('title')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder='Enter Title ' />
                </div>
                <div className="space-y-4">
                    <label className="text-gray-600 mb-2 block" htmlFor='Description' >Description</label>
                    <input type="text" id='Description' required onChange={handlerProduc('description')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder='Enter Description' />
                </div>
                <div className="space-y-4 relative">
                    <label className="text-gray-600 mb-2 block" htmlFor='img' >Image</label>

                    {
                        loadingURL ? (
                            <div>
                                <img src={imageURL} alt="profile" className="w-96 h-96  mx-auto" />
                                <div onClick={deleteHandler} className=" absolute right-[0%] lg:left-[70%] top-0  cursor-pointer text-2xl text-red py-2 px-6">X</div>
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
                    <label className="text-gray-600 mb-2 block" htmlFor='sku' >Sku</label>
                    <input type="text" id='sku' required onChange={handlerProduc('sku')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder='Enter sku' />
                </div>
                <div className="space-y-4">
                    <label className="text-gray-600 mb-2 block" htmlFor='price' >Price</label>
                    <input type="text" id='price' required onChange={handlerProduc('price')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder='LE' />
                </div>
                <div className="space-y-4">
                    <label className="text-gray-600 mb-2 block" htmlFor='pricerival' >Price Rival</label>
                    <input type="text" id='pricerival' onChange={handlerProduc('pricerival')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder='LE' />
                </div>
                <div className="space-y-4">
                    <select name="Sofa" required onChange={handlerProduc('category')}  >
                        <option  >All Category</option>
                        <option value="Bedroom" >Bedroom</option>
                        <option value="Sofa" >Sofa</option>
                        <option value="Office">Office</option>
                        <option value="Outdoor" >Outdoor</option>
                        <option value="Mattress">Mattress</option>
                        <option value="Dinings">Dinings</option>
                    </select>
                </div>
                <div className="space-y-4">
                    <label className="text-gray-600 mb-2 block" htmlFor='Availability' >Availability</label>
                    <input type="text" id='Availability' required onChange={handlerProduc('availability')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " placeholder='0' />
                </div>
                <div className="space-y-4">
                    <label className="text-gray-600 mb-2 block" htmlFor='About' >About Product</label>
                    <input type="text" id='About' required onChange={handlerProduc('aboutProduct')} className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary focus:placeholder:opacity-0 " />
                </div>
                <button type="submit" className="w-full bg-primary py-2 text-white block border-primary border rounded hover:bg-transparent uppercase font-roboto font-medium hover:text-gray-600 ">Add Edit Product</button>
            </form>
        </div>
    )
}

export default AddProduct
