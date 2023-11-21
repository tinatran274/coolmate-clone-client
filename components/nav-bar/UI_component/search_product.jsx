'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const SearchProduct = (props) => {
  const handleNomalize = (product) => {
    const imageURLs = product.productItems.map((color) => ({
      color_name: color.color,
      color_image: color.colorImage,
      color_item_image: color.productItemImages.map((image) => image.url)
    }))

    return {
      name: product?.name || '',
      price: product?.priceStr || 0,
      size: ['M', 'L', 'XL', '2XL', '3XL', '4XL'],
      images: imageURLs
    }
  }

  const product = handleNomalize(props.product)

  return (
    <AspectRatio ratio={9 / 16}>
      <div className=" flex flex-col h-full w-full">
        <AspectRatio ratio={9 / 16} className="flex flex-col h-full">
          <div className="relative group flex flex-[85%] overflow-hidden rounded-xl mb-[15px]">
            <AspectRatio ratio={3 / 4}>
              <Image
                alt={product.name}
                objectFit="cover"
                width={672}
                height={990}
                src={product?.images[0].color_item_image[0]}
                className="cursor-pointer"
              />
            </AspectRatio>

            <span
              className="absolute top-[0.625rem] right-[0.75rem] text-white bg-[#2f5acf]
          rounded-[5px] px-[10px] font-bold z-[2] text-[0.625rem] h-[22px] justify-center items-center flex capitalize"
            >
              Mới
            </span>
          </div>
          <div className="flex flex-[15%] flex-col rounded-xl">
            <h3 className="font-[400] text-[14px] mb-1 leading-5">
              {product.name}
            </h3>

            <div className="flex flex-row-reverse justify-end text-sm font-[400]">
              <span className="text-red-500 ml-[10px]">-8%</span>
              <del className="text-[#c4c4c4]">{product.price}</del>
              <ins className="text-[#000] mr-[14px] font-[700] no-underline">
                {product.price}
              </ins>
            </div>
            <span className="text-[#2f5acf] text-xs italic mt-2 font-[600]">
              Mua 2 giảm thêm 10%
            </span>
          </div>
        </AspectRatio>
      </div>
    </AspectRatio>
  )
}

export default SearchProduct
