import CardProduct from '../../components/card/card-product'
import CardBanner from '../../components/card/card-banner'

const CollectionList = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 grid-cols-2 pt-[100px] max-w-full px-[30px] mx-auto">
      <CardBanner
        bannerUrl={
          'https://media.coolmate.me/cdn-cgi/image/quality=80/image/August2023/Rectangle_245_(11).png'
        }
      />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  )
}

export default CollectionList
