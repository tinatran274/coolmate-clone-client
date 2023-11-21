'use client'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Separator } from '@/components/ui/separator'
import { MdClose } from 'react-icons/md'
import CollectionNewList from '../../../app/(pages)/collection/collection-new-list'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import { useState } from 'react'
import { useDebounce } from '../../../app/hooks/useDebounce'
const SearchComponent = ({ showSearchComponent }) => {
  const [value, setValue] = useState('')
  const searchDebounce = useDebounce(value, 500)
  return (
    <div className="w-full h-full flex flex-col backdrop-brightness-50">
      <Separator />
      <div className=" w-full min-h-[100px] flex items-center justify-center bg-white">
        <Input
          placeholder="Tìm kiếm sản phẩm..."
          prefix={<SearchOutlined className="mx-2" />}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="max-w-md p-2 rounded-3xl"
        />
        <MdClose
          className="h-6 w-6 ml-[30px] cursor-pointer"
          onClick={showSearchComponent}
        />
      </div>
      <div className="h-full w-[1000px] bg-white rounded-md place-self-center mt-3 pt-[60px] px-[80px]">
        {!searchDebounce && (
          <div className="w-full h-fit mb-5">
            <div className="text-base font-medium">
              Từ khóa nổi bật ngày hôm nay
            </div>
            <div className="flex flex-wrap items-center justify-start gap-3 py-4">
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
            </div>
          </div>
        )}
        <div className="flex w-full h-full flex-col">
          <div className="text-xl font-bold">Sản phẩm tìm kiếm</div>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
