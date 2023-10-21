'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'

import Image from 'next/image'
import { useState } from 'react'

const CardType = () => {
  const [isHover, setIsHover] = useState(false)

  const category = {
    image:
      'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80,format=auto/uploads/September2023/Refdfdctangle_178.png',
    imageHover: 'https://mcdn.coolmate.me/image/September2023/mceclip0_81.jpg',
    type: 'Áo các loại',
    description: 'Áo thun, áo Polo và các áo khác'
  }

  return (
    <div className="px-[16px] overflow-y-hidden overflow-x-auto w-[250px]">
      <AspectRatio ratio={9 / 16}>
        <div className=" flex flex-col h-[485px] w-full">
          <AspectRatio ratio={9 / 16} className="flex flex-col h-full">
            <div className="relative group flex flex-[75%] overflow-hidden rounded-[0.5rem]">
              <AspectRatio ratio={3 / 4}>
                <Image
                  alt={category.type}
                  objectFit="cover"
                  width={672}
                  height={990}
                  src={!isHover ? category?.image : category?.imageHover}
                  className="cursor-pointer"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                />
              </AspectRatio>
            </div>
            <div className="flex flex-[25%] flex-col rounded-xl">
              <span className="text-[14px] font-bold block pt-[7px] pb-[3px]">
                {category.type}
              </span>
              <span className="text-xs text-[#979696]">
                {category.description}
              </span>
            </div>
          </AspectRatio>
        </div>
      </AspectRatio>
    </div>
  )
}

export default CardType
