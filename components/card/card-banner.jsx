import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
const CardBanner = ({ bannerUrl }) => {
  return (
    <div className="h-[485px] w-full">
      <AspectRatio ratio={9 / 16}>
        <Image alt="Banner Image" src={bannerUrl} fill className="rounded-md" />
      </AspectRatio>
    </div>
  )
}

export default CardBanner
