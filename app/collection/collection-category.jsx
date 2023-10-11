import Image from 'next/image'

const CollectionCategory = ({ category }) => {
  return (
    <div className="mx-8 relative w-[161px] h-[107px] cursor-pointer">
      <Image
        alt="Collection Category"
        src={category.imageUrl}
        fill
        className="hover:opacity-80 transition-opacity duration-300 rounded-2xl"
      />
    </div>
  )
}

export default CollectionCategory
