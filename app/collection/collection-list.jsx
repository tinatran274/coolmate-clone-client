import Image from 'next/image'
import CardProduct from '../../components/card-product'
import CardBanner from '../../components/card-banner'

const CollectionList = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 pt-[100px] max-w-full px-[16px] mx-auto">
      <CardBanner
        bannerUrl={
          'https://media.coolmate.me/cdn-cgi/image/quality=80/image/August2023/Rectangle_245_(11).png'
        }
      />
      <CardProduct />
      <div>CollectionList</div>
      <div>CollectionList</div>
      <div>CollectionList</div>
      <div>CollectionList</div>
      <div>CollectionList</div>
      <div>CollectionList</div>
      <div>CollectionList</div>
      <div>CollectionList</div>
    </div>
  )
}

export default CollectionList
