'use client'
import * as React from 'react'

import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import Filtering from '../../../../components/treeview/treeview'
import { useDebounce } from '../../../hooks/useDebounce'
const data = [
  {
    id: 1,
    category_name: 'Category 1'
  },
  {
    id: 2,
    category_name: 'Category 2'
  },
  {
    id: 3,
    category_name: 'Category 3'
  },
  {
    id: 4,
    category_name: 'Category 4'
  },
  {
    id: 5,
    category_name: 'Category 5',
    parent_id: 1
  },
  {
    id: 6,
    category_name: 'Category 6',
    parent_id: 1
  },
  {
    id: 7,
    category_name: 'Category 7',
    parent_id: 2
  },
  {
    id: 8,
    category_name: 'Category 8',
    parent_id: 3
  },
  {
    id: 9,
    category_name: 'Category 9',
    parent_id: 4
  }
]
const CategoriesPage = () => {
  const [search, setSearch] = React.useState('')
  const searchDebounced = useDebounce(search, 300)
  const categories = data.filter((item) => item.parent_id === undefined)

  const [hidden, setHidden] = React.useState(
    data.filter((item) => item.parent_id === undefined)
  )
  const router = useRouter()
  return (
    <div className="w-full p-4 pt-6 h-fit">
      <div className="justify-between flex">
        <h2 className="font-bold mb-1 text-xl">Categories</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push('/admin/create-category')}
          className="bg-black text-white hover:bg-white hover:text-black"
        >
          New Category
        </Button>
      </div>
      <div className="flex items-end pb-4">
        <div className="flex w-full gap-4 mt-5">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="max-w-[300px] min-w-[300px] pr-[30px]"
          />
          <div
            className="flex items-center underline whitespace-normal text-[14px] font-medium cursor-pointer"
            onClick={() => setSearch('')}
          >
            Xoá lọc
          </div>
        </div>
      </div>
      <div className="rounded-md border w-full h-full">
        <Filtering search={searchDebounced} />
      </div>
    </div>
  )
}
export default CategoriesPage
