'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Chip } from '@nextui-org/chip'
import { useState } from 'react'
const FilterProduct = ({ title }) => {
  const [valueFilter, setValueFilter] = useState('')
  const value = {
    new: 'Mới nhất',
    hot: 'Bán chạy',
    asc: 'Giá thấp đến cao',
    desc: 'Giá cao đến thấp',
    sale: '% giảm giá nhiều'
  }
  return (
    <div className="pt-[27px] px-[36px]">
      <div className=" flex items-center justify-start gap-5">
        <div className="text-[26px] font-medium leading-8">{title}</div>
        <div>
          <Select
            value={valueFilter}
            onValueChange={(value) => setValueFilter(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="new">Mới nhất</SelectItem>
                <SelectItem value="hot">Bán chạy</SelectItem>
                <SelectItem value="asc">Giá thấp đến cao</SelectItem>
                <SelectItem value="desc">Giá cao đến thấp</SelectItem>
                <SelectItem value="sale">% giảm giá nhiều</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div
          className="flex items-center underline whitespace-normal text-[14px] font-medium cursor-pointer"
          onClick={() => setValueFilter('')}
        >
          Xoá lọc
        </div>
      </div>
      {valueFilter && (
        <div className="flex mt-2">
          <Chip onClose={() => setValueFilter('')} variant="flat">
            {value[valueFilter]}
          </Chip>
        </div>
      )}
    </div>
  )
}

export default FilterProduct
