/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Separator } from '@/components/ui/separator'
import { MdClose } from 'react-icons/md'

import { ScrollShadow } from '@nextui-org/scroll-shadow'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../../app/hooks/useDebounce'
import SearchProduct from './search_product'

const SearchComponent = ({ showSearchComponent }) => {
  const response = {
    pageNumber: 1,
    pageSize: 10,
    firstPage:
      'https://localhost:7107/api/product/Áo các loại?pageNumber=1&pageSize=10',
    lastPage:
      'https://localhost:7107/api/product/Áo các loại?pageNumber=2&pageSize=10',
    totalPages: 2,
    totalRecords: 18,
    nextPage:
      'https://localhost:7107/api/product/Áo các loại?pageNumber=2&pageSize=10',
    previousPage: null,
    data: [
      {
        id: 1,
        categoryId: 2,
        name: 'Polo Ice Cooling',
        description:
          'Thành phần: 85% Polyamide + 15% Spandex | Vải được xử lý hoàn thiện tính năng Thấm hút (Wicking) và Nhanh khô (Ex-Dry) | Đường lai tay và lai áo cắt laser được ép seam hiện đại | Kiểu dệt Pique thoáng khí, mang đến cảm giác mát mẻ khi mặc | Vải có độ bền cao, hạn chế co rút và chống nhăn tốt | Tự hào sản xuất tại Việt Nam | ',
        priceInt: 349000,
        priceStr: '349.000đ',
        category: null,
        productItems: [
          {
            id: 1,
            productId: 1,
            size: 'M',
            color: 'Đen',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/November2023/promax_polo_den113_4.jpg',
            qtyInStock: 48,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 6,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/zz23CMCW.PL001.8z_(1)_copy_88_32.jpg',
                productItem: null
              },
              {
                id: 7,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.13_26_92.jpg',
                productItem: null
              },
              {
                id: 8,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.11_42.jpg',
                productItem: null
              },
              {
                id: 9,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.12_66.jpg',
                productItem: null
              },
              {
                id: 10,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.15_100.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 4,
            productId: 1,
            size: 'M',
            color: 'Xanh Navy',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/November2023/mau_vai_combo-1.jpg',
            qtyInStock: 38,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 11,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.2_68_70.jpg',
                productItem: null
              },
              {
                id: 12,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.3_11.jpg',
                productItem: null
              },
              {
                id: 13,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.5_23.jpg',
                productItem: null
              },
              {
                id: 14,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.7_5.jpg',
                productItem: null
              },
              {
                id: 15,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.4_2_86.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          }
        ]
      },
      {
        id: 11,
        categoryId: 2,
        name: 'Polo Ice Cooling',
        description:
          'Thành phần: 85% Polyamide + 15% Spandex | Vải được xử lý hoàn thiện tính năng Thấm hút (Wicking) và Nhanh khô (Ex-Dry) | Đường lai tay và lai áo cắt laser được ép seam hiện đại | Kiểu dệt Pique thoáng khí, mang đến cảm giác mát mẻ khi mặc | Vải có độ bền cao, hạn chế co rút và chống nhăn tốt | Tự hào sản xuất tại Việt Nam | ',
        priceInt: 349000,
        priceStr: '349.000đ',
        category: null,
        productItems: [
          {
            id: 1,
            productId: 1,
            size: 'M',
            color: 'Đen',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/November2023/promax_polo_den113_4.jpg',
            qtyInStock: 48,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 6,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/zz23CMCW.PL001.8z_(1)_copy_88_32.jpg',
                productItem: null
              },
              {
                id: 7,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.13_26_92.jpg',
                productItem: null
              },
              {
                id: 8,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.11_42.jpg',
                productItem: null
              },
              {
                id: 9,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.12_66.jpg',
                productItem: null
              },
              {
                id: 10,
                productItemId: 1,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.15_100.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 4,
            productId: 1,
            size: 'M',
            color: 'Xanh Navy',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/November2023/mau_vai_combo-1.jpg',
            qtyInStock: 38,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 11,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.2_68_70.jpg',
                productItem: null
              },
              {
                id: 12,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.3_11.jpg',
                productItem: null
              },
              {
                id: 13,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.5_23.jpg',
                productItem: null
              },
              {
                id: 14,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.7_5.jpg',
                productItem: null
              },
              {
                id: 15,
                productItemId: 4,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.4_2_86.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          }
        ]
      },
      {
        id: 4,
        categoryId: 2,
        name: 'Áo khoác thể thao Pro Active',
        description:
          'Thành phần: 100% Polyester | Chất liệu áo khoác thể thao có khả năng giữ ấm | Hạn chế xù lông và chống nhăn | Form áo: Regular, ôm nhẹ | Tự hào sản xuất tại Việt Nam | Người mẫu: 1m77 - 69kg, mặc áo 2XL | ',
        priceInt: 469000,
        priceStr: '469.000đ',
        category: null,
        productItems: [
          {
            id: 55,
            productId: 4,
            size: 'M',
            color: 'Xám',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/2-5a23_79.jpg',
            qtyInStock: 33,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 327,
                productItemId: 55,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.20_38.jpg',
                productItem: null
              },
              {
                id: 328,
                productItemId: 55,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.24_53.jpg',
                productItem: null
              },
              {
                id: 329,
                productItemId: 55,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.21.jpg',
                productItem: null
              },
              {
                id: 330,
                productItemId: 55,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.23.jpg',
                productItem: null
              },
              {
                id: 331,
                productItemId: 55,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/proac.akpk.2.jpg',
                productItem: null
              },
              {
                id: 332,
                productItemId: 55,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/AD001.s2.5.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 58,
            productId: 4,
            size: 'M',
            color: 'Xanh Navy',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/mau-xanh-navy_38.jpg',
            qtyInStock: 25,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 303,
                productItemId: 58,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.9_84.jpg',
                productItem: null
              },
              {
                id: 304,
                productItemId: 58,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.12_94.jpg',
                productItem: null
              },
              {
                id: 305,
                productItemId: 58,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.10.jpg',
                productItem: null
              },
              {
                id: 306,
                productItemId: 58,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/AD001.s2.4.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 61,
            productId: 4,
            size: 'M',
            color: 'Đen',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/mau-den_33.jpg',
            qtyInStock: 46,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 351,
                productItemId: 61,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.15_46.jpg',
                productItem: null
              },
              {
                id: 352,
                productItemId: 61,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.18_80.jpg',
                productItem: null
              },
              {
                id: 353,
                productItemId: 61,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.16.jpg',
                productItem: null
              },
              {
                id: 354,
                productItemId: 61,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/QD001.19.jpg',
                productItem: null
              },
              {
                id: 355,
                productItemId: 61,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/proac.akpk.1.jpg',
                productItem: null
              },
              {
                id: 356,
                productItemId: 61,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/AD001.s2.6.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          }
        ]
      },
      {
        id: 8,
        categoryId: 2,
        name: 'Áo nỉ chui đầu Lifewear',
        description:
          'Chất liệu: Nỉ chân cua | Thành phần: 60% Cotton + 40% Polyester | Thoáng khí và thoải mái khi mặc, vẫn giữ ấm cho bạn trong trời thu đông | Hạn chế xù lông, bền màu | Form dáng: Regular, thoải mái | Tự hào sản xuất tại Viêt Nam | ',
        priceInt: 299000,
        priceStr: '299.000đ',
        category: null,
        productItems: [
          {
            id: 43,
            productId: 8,
            size: 'M',
            color: 'Xám sáng',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/23CMCW.ST002.22.jpg',
            qtyInStock: 13,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 232,
                productItemId: 43,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.4_47.jpg',
                productItem: null
              },
              {
                id: 233,
                productItemId: 43,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.1.jpg',
                productItem: null
              },
              {
                id: 234,
                productItemId: 43,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.2.jpg',
                productItem: null
              },
              {
                id: 235,
                productItemId: 43,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.2.jpg',
                productItem: null
              },
              {
                id: 236,
                productItemId: 43,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.4.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 46,
            productId: 8,
            size: 'M',
            color: 'Đen',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/23CMCW.ST002.19.jpg',
            qtyInStock: 18,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 244,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.1_64.jpg',
                productItem: null
              },
              {
                id: 245,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.5.jpg',
                productItem: null
              },
              {
                id: 246,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.6.jpg',
                productItem: null
              },
              {
                id: 247,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.11.jpg',
                productItem: null
              },
              {
                id: 248,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.12.jpg',
                productItem: null
              },
              {
                id: 249,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.14.jpg',
                productItem: null
              },
              {
                id: 250,
                productItemId: 46,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.13.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 49,
            productId: 8,
            size: 'M',
            color: 'Xanh rêu',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/23CMCW.ST002.20.jpg',
            qtyInStock: 12,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 277,
                productItemId: 49,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.2_45.jpg',
                productItem: null
              },
              {
                id: 278,
                productItemId: 49,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.7.jpg',
                productItem: null
              },
              {
                id: 279,
                productItemId: 49,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.8.jpg',
                productItem: null
              },
              {
                id: 280,
                productItemId: 49,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.18.jpg',
                productItem: null
              },
              {
                id: 281,
                productItemId: 49,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.17.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          },
          {
            id: 52,
            productId: 8,
            size: 'M',
            color: 'Xám đậm',
            colorImage:
              'https://media.coolmate.me/cdn-cgi/image/width=160,height=160,quality=80,format=auto/uploads/October2023/23CMCW.ST002.21.jpg',
            qtyInStock: 39,
            orderLines: [],
            product: null,
            productItemImages: [
              {
                id: 318,
                productItemId: 52,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.3_55.jpg',
                productItem: null
              },
              {
                id: 319,
                productItemId: 52,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.3.jpg',
                productItem: null
              },
              {
                id: 320,
                productItemId: 52,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/ST002.updat.4_97.jpg',
                productItem: null
              },
              {
                id: 321,
                productItemId: 52,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.7.jpg',
                productItem: null
              },
              {
                id: 322,
                productItemId: 52,
                url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/October2023/23CMCW.ST002.8.jpg',
                productItem: null
              }
            ],
            shoppingCartItems: []
          }
        ]
      }
    ]
  }
  const [responseData, setResponseData] = useState(response.data)
  const [value, setValue] = useState('')
  const searchDebounce = useDebounce(value, 500)
  useEffect(() => {
    setResponseData(
      response.data.filter((product) =>
        product.name.toLowerCase().includes(searchDebounce.toLowerCase())
      )
    )
  }, [searchDebounce])
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
      <div className="h-full w-[1000px] bg-white rounded-md place-self-center mt-3 pt-[40px] px-[80px]">
        {!searchDebounce && (
          <div className="w-full h-fit mb-5">
            <div className="text-base font-medium">
              Từ khóa nổi bật ngày hôm nay
            </div>
            <div className="flex flex-wrap items-center justify-start gap-3 py-4">
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer border-teal-400"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer border-teal-400"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer border-teal-400"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
              <span
                className="border py-2 px-3 rounded-2xl font-medium text-xs capitalize cursor-pointer border-teal-400"
                onClick={() => setValue('Áo Basic')}
              >
                Áo basic
              </span>
            </div>
          </div>
        )}
        <div className="flex w-full h-full flex-col">
          <div className="text-xl font-bold">Sản phẩm tìm kiếm</div>
          <div className="w-full h-full pt-[10px]">
            {!!responseData.length ? (
              <ScrollShadow className="w-full h-[380px] flex flex-wrap gap-4 justify-start pt-4 pb-2">
                {responseData.map((product, index) => {
                  return (
                    <div key={index} className="w-[190px] h-[340px] mb-5">
                      <SearchProduct product={product} />
                    </div>
                  )
                })}
                {responseData.map((product, index) => {
                  return (
                    <div key={index} className="w-[190px] h-[340px] mb-5">
                      <SearchProduct product={product} />
                    </div>
                  )
                })}
              </ScrollShadow>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-zinc-400 capitalize">Not found this!</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
