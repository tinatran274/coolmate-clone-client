import { Separator } from '@/components/ui/separator'
import CollectionBanner from '../collection-banner'
import CollectionFilter from '../collection-filter'
import CollectionList from '../collection-list'
import CollectionNewList from '../collection-new-list'
import CollectionActiveSlider from '../collection-active-slider'
import FilterProduct from '../filter-product'

const imageUrl =
  'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=80,format=auto/uploads/October2023/ac161920-x-475.jpg'
const categories = [
  {
    imageUrl: 'https://mcdn.coolmate.me/image/August2023/mceclip1_71.png'
    //slug:'combo-the-thao'
  },
  {
    imageUrl: 'https://mcdn.coolmate.me/image/March2023/mceclip3_52.jpg'
    //slug:'combo-the-thao'
  },
  {
    imageUrl: 'https://mcdn.coolmate.me/image/August2022/mceclip3_67.png'
    //slug:'combo-the-thao'
  },
  {
    imageUrl: 'https://mcdn.coolmate.me/image/August2022/mceclip4_32.png'
    //slug:'combo-the-thao'
  },
  {
    imageUrl: 'https://mcdn.coolmate.me/image/March2023/mceclip2_27.jpg'
    //slug:'combo-the-thao'
  },
  {
    imageUrl: 'https://mcdn.coolmate.me/image/June2023/mceclip0_3.png'
    //slug:'combo-the-thao'
  }
]
const ActiveWearPage = () => {
  return (
    <div className="pb-[30px]">
      <CollectionBanner imageUrl={imageUrl} />
      <div className="flex flex-col items-center text-center justify-center py-8">
        <h1 className="font-bold text-[32px]">Coolmate Active</h1>
        <div className="max-w-[1100px] text-[16pt] py-5">
          Dòng sản phẩm thể thao ứng dụng các chất liệu và thiết kế mới với
          nhiều tính năng ưu việt giúp bạn thoải mái và tập trung hơn vào các
          chuyển động của mình.
        </div>
      </div>
      <Separator />
      <CollectionFilter categories={categories} />
      <Separator />
      <CollectionNewList />
      <FilterProduct title="Đồ thể thao" />

      <CollectionList />
      <CollectionActiveSlider />
      <CollectionBanner imageUrl="https://mcdn.coolmate.me/image/July2022/mceclip0.jpg" />
    </div>
  )
}

export default ActiveWearPage
