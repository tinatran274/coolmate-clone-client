'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import CardContent from './card-content'
import CardThumbnail from './card-thumbnail'

const CardProduct = () => {
  return (
    <div className=" flex flex-col h-[485px] w-full">
      <AspectRatio ratio={9 / 16} className="flex flex-col h-full">
        <CardThumbnail />
        <CardContent />
      </AspectRatio>
    </div>
  )
}

export default CardProduct
