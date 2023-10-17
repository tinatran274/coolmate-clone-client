'use client'

import React, { useState} from 'react'

const NewProduct = () => {

    const [isNewProduct, setNewProduct] = useState(true)

    const handleChangeToNewProduct = () => {
        setNewProduct(false);
    }
    const handleChangeToSale = () => {
        setNewProduct(true);
    }

    return(
        <div>
            <div className="flex items-center mx-4 my-8 ">
                <span className={`text-2xl font-bold cursor-pointer ${isNewProduct ? 'text-black' : 'text-gray-300'} hover:text-black` } 
                onClick={handleChangeToSale}>Sản phẩm mới</span>
                <div className="border-[2px] border-gray-300 h-6 mx-4"></div>
                <span className={`text-2xl font-bold cursor-pointer ${isNewProduct ? 'text-gray-300' : 'text-black' } hover:text-black`} 
                onClick={handleChangeToNewProduct}>Bán chạy nhất</span>
            </div>
            {isNewProduct?
            <div>danh sách sản phẩm mới </div> 
            :
            <div>danh sách sản phẩm bán chạy nhất</div>

            }


        </div>
        

    )
}
export default NewProduct
