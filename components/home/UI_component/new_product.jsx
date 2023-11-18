'use client'

import React, { useState} from 'react'
import CollectionList from '../../../app/(pages)/collection/collection-list'

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
            <div className="flex items-center mx-4 mt-8">
                <span className={`text-2xl font-bold cursor-pointer ${isNewProduct ? 'text-black' : 'text-gray-300'} hover:text-black` } 
                onClick={handleChangeToSale}>Sản phẩm mới</span>
                <div className="border-[2px] border-gray-300 h-6 mx-4"></div>
                <span className={`text-2xl font-bold cursor-pointer ${isNewProduct ? 'text-gray-300' : 'text-black' } hover:text-black`} 
                onClick={handleChangeToNewProduct}>Bán chạy nhất</span>
            </div>
            {isNewProduct?
            <CollectionList/>
            :
            <CollectionList/>

            }


        </div>
        

    )
}
export default NewProduct
