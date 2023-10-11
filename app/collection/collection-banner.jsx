import Image from 'next/image'

const CollectionBanner = ({ imageUrl }) => {
  return (
    <div className="w-full h-[320px] relative">
      <Image alt="Collection Banner" src={imageUrl} fill />
    </div>
  )
}

export default CollectionBanner
