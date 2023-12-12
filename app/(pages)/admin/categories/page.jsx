'use client'
import * as React from 'react'

import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import Filtering from '../../../../components/treeview/treeview'
import { useDebounce } from '../../../hooks/useDebounce'
import axios from 'axios'

const CategoriesPage = () => {
  const [search, setSearch] = React.useState('')
  const searchDebounced = useDebounce(search, 300)
  const [categories, setCategories] = React.useState([])
  const getAllCategories = (
    url = `${process.env.NEXT_PUBLIC_API_ROOT}/api/category`
  ) => {
    try {
      const options = {
        method: 'GET',
        url: url
      }
      axios
        .request(options)
        .then(function (response) {
          setCategories({ name: '', children: response.data })
        })
        .catch(function (error) {
          console.error(error)
        })
    } catch (error) {
      console.log('Error fetching data:', error)
    }
  }
  React.useEffect(() => {
    getAllCategories()
  }, [])
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
        <Filtering search={searchDebounced} categories={categories} />
      </div>
    </div>
  )
}
export default CategoriesPage
