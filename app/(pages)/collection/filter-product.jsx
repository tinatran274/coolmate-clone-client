'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'
const FilterProduct = ({ title }) => {
  const [valueFilter, setValueFilter] = useState('')
  return (
    <div className="pt-[27px] px-[36px] flex items-center justify-start gap-5">
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
        onClick={() => setValueFilter('new')}
      >
        Xoá lọc
      </div>
    </div>
  )
}

export default FilterProduct
