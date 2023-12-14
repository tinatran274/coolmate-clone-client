'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { notification, Space } from 'antd'
import { PlusCircleFilled, LeftCircleOutlined } from '@ant-design/icons'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Menu } from 'antd'

const CreateCategory = () => {
  const convertCategory = [
    {
      category_name: 'Đồ thể thao',
      children: [
        {
          category_name: 'Theo nhu cầu',
          children: null
        },
        {
          category_name: 'Theo sản phẩm',
          children: [
            {
              category_name: 'Quần short',
              children: null
            }
          ]
        }
      ]
    },
    {
      category_name: 'Mặc hàng ngày',
      children: [
        {
          category_name: 'Bộ sưu tập',
          children: null
        },
        {
          category_name: 'Theo sản phẩm',
          children: [
            {
              category_name: 'Quần short',
              children: null
            },
            {
              category_name: 'Quần đùi',
              children: null
            },
            {
              category_name: 'Quần dài',
              children: null
            }
          ]
        }
      ]
    }
  ]

  const [categoryName, setCategoryName] = useState('')
  const [parentCategory, setParentCategory] = useState({})
  const [status, setStatus] = useState('')
  const [visibility, setVisibility] = useState('')

  const [api, contextHolder] = notification.useNotification()
  const openNotificationWithIcon = (type, content) => {
    api[type]({
      message: type,
      description: content
    })
  }
  function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type }
  }

  const convertCategoryToItems = (categoryList, parentKey = '0') => {
    return categoryList.map((category, index) => {
      const key = `${parentKey}-${index}`
      const item = getItem(category.category_name, key, null)
      if (category.children && category.children.length > 0) {
        item.children = convertCategoryToItems(category.children, key)
      }
      return item
    })
  }

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value)
  }

  const getAllCategoryNames = (category) => {
    let categoryNames = ''
    let currentCategory = category
    while (currentCategory) {
      if (currentCategory.parent_category) {
        categoryNames += currentCategory.category_name + ' - '
      } else {
        categoryNames += currentCategory.category_name
      }
      currentCategory = currentCategory.parent_category
    }
    return categoryNames
  }

  const handleChooseParent = (e) => {
    const indices = e.key.split('-').map(Number).slice(1)

    const result = indices.reduce((acc, index) => {
      if (acc && Array.isArray(acc) && acc[index]) {
        return acc[index].children
      } else {
        return null
      }
    }, convertCategory)

    console.log(result)
  }

  const handleStatusChange = (value) => {
    setStatus(value)
  }
  const handleVisibilityChange = (value) => {
    setVisibility(value)
  }

  const handleAddCategory = () => {}

  return (
    <div className="w-[100%] bg-gray-100 ">
      <div className="w-[100%] flex flex-row">
        {contextHolder}
        <div className="w-[65%] p-8">
          <div className="flex flex-row items-center mb-8">
            <LeftCircleOutlined className="text-black text-2xl" />
            <p className="text-xl font-bold mx-3">Tạo category mới</p>
          </div>
          <div className="shadow-md px-8 py-10 mb-6 bg-white rounded-md">
            <p className="font-bold mb-5">Thông tin chung</p>
            <p className="text-sm mx-2 mb-1 mt-8">Tên category</p>
            <Input
              className="rounded-full px-4"
              type="text"
              placeholder="Nhập tên category"
              value={categoryName}
              onChange={handleCategoryNameChange}
            />
            <p className="text-sm mx-2 mb-1 mt-8">Parent category</p>
            <Menu
              className="w-100%"
              onClick={handleChooseParent}
              mode="inline"
              items={convertCategoryToItems(convertCategory)}
            />
          </div>
        </div>
        <div className="w-[30%] mt-[92px]">
          <div className="shadow-md px-8 py-10 mb-6 bg-white rounded-md">
            <p className="font-bold mb-4">Trạng thái</p>
            <p className="text-sm mb-3 mt-6">Status</p>
            <RadioGroup
              className="flex flex-row my-4 gap-6"
              defaultValue="Disabled"
              onValueChange={handleStatusChange}
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  className={
                    status === 'Disabled' ? 'border-blue-600 text-blue-600' : ''
                  }
                  value="Disabled"
                  id="Disabled"
                />
                <Label htmlFor="Disabled">Disabled</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  className={
                    status === 'Enabled' ? 'border-blue-600 text-blue-600' : ''
                  }
                  value="Enabled"
                  id="Enabled"
                />
                <Label htmlFor="Enabled">Enabled</Label>
              </div>
            </RadioGroup>
            <p className="text-sm mb-3 mt-6">Visibility</p>
            <RadioGroup
              className="flex flex-row my-4 gap-6"
              defaultValue="Not visible"
              onValueChange={handleVisibilityChange}
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  className={
                    visibility === 'Not visible'
                      ? 'border-blue-600 text-blue-600'
                      : ''
                  }
                  value="Not visible"
                  id="Not visible"
                />
                <Label htmlFor="Not visible">Not visible</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem
                  className={
                    visibility === 'Visible'
                      ? 'border-blue-600 text-blue-600'
                      : ''
                  }
                  value="Visible"
                  id="Visible"
                />
                <Label htmlFor="Visible">Visible</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-gray-100 ">
        <Button
          className="w-[95%] rounded-full p-8 mb-20 ml-8"
          onClick={handleAddCategory}
        >
          Hoàn tất
        </Button>
      </div>
    </div>
  )
}
export default CreateCategory
