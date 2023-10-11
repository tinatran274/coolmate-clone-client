import Image from 'next/image'
const CardBanner = ({ bannerUrl }) => {
  return (
    <div className="relative h-[487px] px-3">
      <Image alt="Banner Image" src={bannerUrl} fill />
    </div>
  )
}

export default CardBanner
