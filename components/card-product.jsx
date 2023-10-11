'use client'
import Image from 'next/image'
import { useState } from 'react'

const CardProduct = () => {
  const [isHover, setIsHover] = useState(false)
  const product = {
    images: [
      'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/PK001.DEN2.2.jpg',
      'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/23CMAW.PK001.1.jpg'
    ],
    title: 'Đai đeo bụng chạy bộ',
    color: 'Đen',
    price: '299.000đ',
    description: 'new'
  }
  return (
    <div className="relative pb-[12px] px-3">
      <div className="h-[80%] relative">
        <Image
          alt={product.title}
          fill
          src={isHover ? product?.images[1] : product?.images[0]}
          className="rounded-xl cursor-pointer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
        <span
          className="absolute top-[0.625rem] right-[0.75rem] text-white bg-[#2f5acf]
          rounded-[5px] px-[10px] font-bold z-[2] text-[0.625rem] h-[22px] justify-center items-center flex capitalize"
        >
          {product.description}
        </span>
        {isHover && (
          <div
            className="absolute bottom-[1.5rem] left-[10%] max-w-[calc(100%-3rem)] w-full
            rounded-[8px] py-[0.7rem] px-[0.75rem] bg-gradient-to-r from-gray-200 from-10% via-slate-200 via-30% to-slate-300 to-90% backdrop-blur-[20%] transition-all duration-300 "
          >
            <p className="font-bold text-center mb-2 text-[14px]">
              Thêm nhanh vào giỏ hàng +
            </p>
          </div>
        )}
      </div>

      <div></div>
    </div>
  )
}

export default CardProduct
