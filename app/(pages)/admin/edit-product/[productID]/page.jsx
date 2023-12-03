'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Label } from '@/components/ui/label'
import { LeftCircleOutlined } from '@ant-design/icons'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { DeleteFilled } from '@ant-design/icons'
import { notification } from 'antd'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useParams, useRouter } from 'next/navigation'
import { getAllCategoryNames } from '@/lib/utils'

const EditProductPage = () => {
  const router = useRouter()
  const param = useParams()
  const listCategory = [
    {
      id: 1,
      category_name: 'Chạy bộ',
      parent_category: {
        category_name: 'Theo nhu cầu',
        parent_category: {
          category_name: 'Đồ thể thao',
          parent_category: null
        }
      }
    },
    {
      id: 2,
      category_name: 'Quần dài',
      parent_category: {
        category_name: 'Quần',
        parent_category: null
      }
    }
  ]
  const data = {
    id: param.productID,
    price: 299000,
    category: listCategory[0],
    description: 'new',
    listColor: [
      {
        color: {
          id: 2,
          name: 'Trắng',
          img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/colorTrang_1A2.jpg'
        },
        size: ['M', 'L', 'XL', 'XS'],
        num: 10,
        image: [
          {
            file: '',
            image:
              'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.14_50.jpg'
          },
          {
            file: '',
            image:
              'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.11_1.jpg'
          }
        ]
      },
      {
        color: {
          id: 1,
          name: 'Đen',
          img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/colorDen_2A8.jpg'
        },
        size: ['M', 'L', 'XL', 'XXL'],
        num: 10,
        image: [
          {
            file: '',
            image:
              'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.4_21.jpg'
          },
          {
            file: '',
            image:
              'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=80/image/September2023/graphic.spec.11_1.jpg'
          }
        ]
      }
    ]
  }

  const listColor = [
    {
      id: 1,
      name: 'Đen',
      img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/colorDen_2A8.jpg'
    },
    {
      id: 2,
      name: 'Trắng',
      img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/colorTrang_1A2.jpg'
    },
    {
      id: 3,
      name: 'Xanh Navy',
      img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/mau-xanh-navy_54.jpg'
    },
    {
      id: 4,
      name: 'Xanh Nhạt',
      img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/June2023/xanh_nhat_200gsm-2.jpg'
    },
    {
      id: 5,
      name: 'Xám',
      img: 'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/April2023/cotton100_xam-7.jpg'
    }
  ]
  const listSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  const [productName, setProductName] = useState('')
  const [costProduct, setCostProduct] = useState(0)
  const [numProduct, setNumProduct] = useState(1)
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState(listColor[0])
  const [listSizeChose, setListSizeChose] = useState([])
  const [listImage, setListImage] = useState([])
  const [listColorChose, setListColorChose] = useState([])
  const [status, setStatus] = useState('')
  const [visibility, setVisibility] = useState('')

  const [api, contextHolder] = notification.useNotification()
  useEffect(() => {
    setProductName(data.id)
    setCostProduct(data.price)
    setCategory(data.category)
    setDescription(data.description)
    setListColorChose(data.listColor)
  }, [])
  const openNotificationWithIcon = (type, content) => {
    api[type]({
      message: type,
      description: content
    })
  }

  const handleCostProductChange = (e) => {
    setCostProduct(e.target.value)
  }
  const handleProductNameChange = (e) => {
    setProductName(e.target.value)
  }
  const handleNumProductChange = (e) => {
    if (e.target.value > 0) setNumProduct(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleSetCategory = (value) => {
    setCategory(listCategory[value])
  }
  const handleSetColor = (index) => {
    setColor(listColor[index])
  }
  const handleSizeChange = (event) => {
    const value = event.target.value
    const isChecked = event.target.checked
    if (isChecked) {
      setListSizeChose([...listSizeChose, value])
    } else {
      setListSizeChose(listSizeChose.filter((option) => option !== value))
    }
  }

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0]
    console.log(file)
    if (file) {
      setListImage([
        ...listImage,
        { file: file, image: URL.createObjectURL(file) }
      ])
    }
  }
  const deleteImage = (index) => {
    const newImageUrls = [...listImage]
    newImageUrls.splice(index, 1)
    setListImage(newImageUrls)
  }
  const deleteColorChose = (index) => {
    const newImageUrls = [...listColorChose]
    listColorChose.splice(index, 1)
    setListImage(listColorChose)
  }
  const handleAddColor = () => {
    if (
      Object.keys(color).length < 1 ||
      listSizeChose.length < 1 ||
      listImage.length < 1
    )
      openNotificationWithIcon('error', 'Bạn chưa điền đủ thông tin màu sắc')
    else {
      if (listColorChose.find((item) => item.color.name === color.name)) {
        openNotificationWithIcon(
          'error',
          `Màu ${color.name} đã tồn tại trong danh sách`
        )
        return
      }
      openNotificationWithIcon('success', `Thêm màu ${color.name} thành công`)
      setListColorChose([
        ...listColorChose,
        { color: color, size: listSizeChose, num: numProduct, image: listImage }
      ])

      setNumProduct(1)
      setListSizeChose([])
      setListImage([])
      console.log([
        ...listColorChose,
        { color: color, size: listSizeChose, num: numProduct, image: listImage }
      ])
    }
  }
  const handleStatusChange = (value) => {
    setStatus(value)
  }
  const handleVisibilityChange = (value) => {
    setVisibility(value)
  }
  const findCategoryIndex = (id) => {
    const index = listCategory.findIndex((item) => item.id === id)
    return index
  }
  const findColorIndex = (id) => {
    const index = listColor.findIndex((item) => item.id === id)
    return index
  }

  const handleAddProduct = () => {
    if (!productName || !costProduct || !category || listColorChose.length < 1)
      openNotificationWithIcon('error', 'Bạn chưa điền đủ thông tin sản phẩm')
    else {
      openNotificationWithIcon(
        'success',
        `Thêm sản phẩm ${productName} thành công`
      )
      const newProduct = {
        name: productName,
        price: costProduct,
        description: description,
        listColor: listColorChose,
        status: status,
        visibility: visibility
      }
      console.log(newProduct)
      setProductName('')
      setCostProduct(1)
      setCategory('')
      setDescription('')
      setListColorChose([])
      setStatus('')
      setVisibility('')
    }
  }
  const handleSetInfor = (item) => {
    setColor(item.color)
    setListSizeChose(item.size)
    setNumProduct(item.num)
    setListImage(item.image)
  }
  return (
    <div className="w-[100%]">
      <div className="w-[100%] bg-gray-100 flex flex-row">
        {contextHolder}
        <div className="w-[65%] p-8">
          <div
            className="flex flex-row items-center mb-8 cursor-pointer"
            onClick={() => {
              router.push('/admin/products')
            }}
          >
            <LeftCircleOutlined className="text-black text-2xl" />
            <p className="text-xl font-bold mx-3">Cập nhật sản phẩm</p>
          </div>
          <div className="shadow-md px-8 py-10 mb-6 bg-white rounded-md">
            <p className="font-bold mb-5">Thông tin chung</p>
            <p className="text-sm mx-2 mb-1 mt-8">Tên sản phẩm</p>
            <Input
              className="rounded-full px-4"
              type="text"
              placeholder="Nhập tên sản phẩm"
              value={productName}
              onChange={handleProductNameChange}
            />
            <div className="flex flex-row justify-between">
              <div className="w-[100%]">
                <p className="text-sm mx-2 mb-1 mt-6">Giá sản phẩm</p>
                <Input
                  className="rounded-full px-4"
                  type="number"
                  placeholder="Nhập giá sản phẩm"
                  value={costProduct}
                  onChange={handleCostProductChange}
                />
              </div>
            </div>
            <p className="text-sm mx-2 mb-1 mt-6">Category</p>
            <div className="flex flex-row justify-between gap-4">
              <Select
                onValueChange={handleSetCategory}
                value={findCategoryIndex(category.id)}
              >
                <SelectTrigger className=" rounded-full px-4">
                  <SelectValue placeholder="Chọn Category" />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-30 w-[100%]">
                    <SelectGroup>
                      {listCategory.map((item, index) => (
                        <SelectItem key={index} value={index}>
                          {getAllCategoryNames(item)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </ScrollArea>
                </SelectContent>
              </Select>
              <Button className="rounded-full p-4 hover:bg-gray-200 hover:text-black">
                Thêm Categogy mới
              </Button>
            </div>
            <p className="text-sm mx-2 mb-1 mt-6">Đặc điểm nổi bật</p>
            <Textarea
              className="rounded-xl px-4 "
              placeholder="Nhập ..."
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="shadow-md px-8 py-10 mb-6 bg-white rounded-md">
            <p className="font-bold mb-5">Thêm màu sắc</p>
            <p className="text-sm mx-2 mb-1 mt-6">Màu sắc</p>
            <Select
              onValueChange={handleSetColor}
              value={findColorIndex(color.id)}
            >
              <SelectTrigger className=" rounded-full px-4">
                <SelectValue placeholder="Chọn màu sắc" />
              </SelectTrigger>
              <SelectContent>
                <ScrollArea className="h-30 w-[100%]">
                  <SelectGroup>
                    {listColor.map((item, index) => (
                      <SelectItem key={index} value={index}>
                        <div className="flex flex-row items-center">
                          <img
                            className="w-10 h-6 object-cover rounded-full mr-4"
                            src={item.img}
                            alt="color"
                          />
                          <span>{item.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </ScrollArea>
              </SelectContent>
            </Select>
            <p className="text-sm mx-2 mb-1 mt-6">Số lượng</p>
            <Input
              className="rounded-full px-4"
              type="number"
              placeholder="Nhập số lượng"
              value={numProduct}
              onChange={handleNumProductChange}
            />
            <p className="text-sm mb-3 mt-6">Kích cỡ</p>
            <div className="flex flex-row items-center justify-between mb-8">
              {listSize.map((item, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    value={item}
                    id={item}
                    checked={listSizeChose.includes(item)}
                    onChange={handleSizeChange}
                  />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            </div>

            <input type="file" accept="image/*" onChange={handleImageUpload1} />
            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {!!listImage.length &&
                listImage.map((item, index) => (
                  <div key={index} className="relative">
                    <img
                      className="h-44 w-44 object-contain border"
                      src={item.image}
                      alt={`image ${index + 1}`}
                    />
                    <Button
                      className="absolute top-2 left-2 rounded-full w-8 h-8 px-2 bg-red-500 hover:bg-red-700"
                      onClick={() => deleteImage(index)}
                    >
                      <DeleteFilled className="text-white text-md " />
                    </Button>
                  </div>
                ))}
            </div>
            <Button
              className="rounded-full p-4 hover:bg-gray-200 hover:text-black mt-8"
              onClick={handleAddColor}
            >
              Thêm màu {color?.name}
            </Button>
            <p className="font-bold mb-4 mt-8">Màu sắc đã chọn</p>
            <div className="mb-6 flex flex-row flex-wrap gap-4">
              {listColorChose.length > 0 ? (
                listColorChose.map((item, index) => (
                  <div key={index} className="relative flex flex-row ">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSetInfor(item, index)}
                    >
                      <img
                        className="w-10 h-6 object-cover rounded-full mr-1 ml-2"
                        src={item.color.img}
                        alt="color"
                      />
                      <span>{item.color.name}</span>
                    </div>
                    <Button
                      className="absolute top-2 left-0 rounded-full w-5 h-5 px-2 bg-red-500 hover:bg-red-700"
                      onClick={() => deleteColorChose(index)}
                    >
                      <DeleteFilled className="text-white text-xs " />
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-sm">Chưa có màu nào</p>
              )}{' '}
            </div>
          </div>
        </div>
        <div className="w-[30%] mt-[92px]">
          <div className="shadow-md px-8 py-10 mb-6 bg-white rounded-md">
            <p className="font-bold mb-4">Trạng thái sản phẩm</p>
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
          onClick={handleAddProduct}
        >
          Hoàn tất
        </Button>
      </div>
    </div>
  )
}
export default EditProductPage
