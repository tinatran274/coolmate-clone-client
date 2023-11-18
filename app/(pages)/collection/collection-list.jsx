import CardProduct from '../../../components/card/card-product'
import CardBanner from '../../../components/card/card-banner'
import { Button } from '@/components/ui/button'

const CollectionList = () => {
  return (
    <div className="max-w-full">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 grid-cols-2 pt-[45px] max-w-full px-[30px] mx-auto">
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
      <div className="flex items-center justify-center flex-col py-[20px] relative mt-[40px] gap-5">
        <Button
          variant="outline"
          className="rounded-[1.5rem] bg-black text-white uppercase h-[45px] py-[0.875rem] px-[2.875rem] font-[700] hover:bg-gray-300/60 hover:text-black"
        >
          Xem thêm
        </Button>
        <p className="opacity-60 text-xs">
          Hiển thị 1 - 18 trên tổng số 88 sản phẩm
        </p>
      </div>
    </div>
  )
}

export default CollectionList
