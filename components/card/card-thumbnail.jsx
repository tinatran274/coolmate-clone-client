import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const CardThumbnail = () => {
  const [isHover, setIsHover] = useState(false)
  const product = {
    images: [
      {
        imageColor:
          'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.2_4.jpg',
        image:
          'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.14_50.jpg',
        imageHover:
          'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.11_1.jpg'
      }
    ],
    title: 'Đai đeo bụng chạy bộ',
    color: 'Đen',
    size: ['M', 'L', 'XL', '2XL', '3XL', '4XL'],
    price: '299.000đ',
    description: 'new'
  }
  return (
    <div className="relative group flex flex-[75%] overflow-hidden rounded-xl">
      <AspectRatio ratio={3 / 4}>
        <Image
          alt={product.title}
          objectFit="cover"
          width={672}
          height={990}
          src={
            !isHover ? product?.images[0].image : product?.images[0].imageHover
          }
          className="cursor-pointer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />
      </AspectRatio>
      <div className="absolute top-[0.625rem] left-[0.75rem] z-[2]">
        <div className="flex items-center mx-[-3px]">
          <div>4.8</div>
          <div>
            <AiFillStar className="w-[12px] h-[10px] mx-[2px]" />
          </div>
          <div className="text-[14px] font-bold tracking-[0.03rem] text-[#2f5acf]">
            (40)
          </div>
        </div>
      </div>
      <span
        className="absolute top-[0.625rem] right-[0.75rem] text-white bg-[#2f5acf]
          rounded-[5px] px-[10px] font-bold z-[2] text-[0.625rem] h-[22px] justify-center items-center flex capitalize"
      >
        {product.description}
      </span>
      {product?.size ? (
        <div
          className="absolute bottom-[1.5rem] left-[9%] max-w-[calc(100%-3rem)] w-full
            lg:visible opacity-0 backdrop-blur-[20px] group-hover:opacity-100
            rounded-[8px] py-[0.7rem] px-[0.75rem] transition-all invisible z-[2]
            "
          style={{
            background:
              'linear-gradient(0deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),hsla(0,0%,100%,.4)'
          }}
        >
          <p className="font-bold text-center mb-2 text-[13px]">
            Thêm nhanh vào giỏ hàng +
          </p>
          <div className="flex flex-wrap gap-[6px] justify-start items-center mt-2">
            {product?.size?.map((item, index) => (
              <div key={index}>
                <button
                  className="bg-white text-black rounded-[0.5rem] text-[13px] w-[40px] h-[35px] font-[600] hover:text-white hover:bg-gray-300/70"
                  onClick={() => console.log('click')}
                >
                  {item}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="absolute bottom-[1.5rem] left-[9%] max-w-[calc(100%-3rem)] w-full
            lg:visible opacity-0 backdrop-blur-[20px] group-hover:opacity-100 cursor-pointer
            hover:scale-105 hover:bg-gray-300/70 
            rounded-[16px] pt-[0.7rem] pb-[0.5rem] px-[0.75rem] transition-all invisible z-[2] bg-white
            "
        >
          <p className="font-bold text-center mb-2 px-[3px] text-[13px] text-black ">
            Thêm nhanh vào giỏ hàng +
          </p>
        </div>
      )}
    </div>
  )
}

export default CardThumbnail
