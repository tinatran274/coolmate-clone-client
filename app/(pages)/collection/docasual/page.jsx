import { Separator } from '@/components/ui/separator'
import CollectionBanner from '../collection-banner'
import CollectionFilter from '../collection-filter'
import CollectionList from '../collection-list'
import CollectionNewList from '../collection-new-list'
import CollectionActiveSlider from '../collection-active-slider'
import FilterProduct from '../filter-product'
import CasualFilter from '../casual-filter'

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
const CasualPage = () => {
  return (
    <div className="pb-[30px]">
      <CasualFilter />
      <Separator />
      <CollectionNewList />
      <FilterProduct title="Đồ mặc hàng ngày" />
      <CollectionList />
      <CollectionActiveSlider />
      <CollectionBanner imageUrl="https://mcdn.coolmate.me/image/July2022/mceclip0.jpg" />
    </div>
  )
}

export default CasualPage
