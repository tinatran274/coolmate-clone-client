'use client'

import React, { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import Info from './UI_component/info'
import Orders from './UI_component/orders'
import UserAdress from './UI_component/user_adress'
import Review from './UI_component/review'

const UserAccount = () => {
  const [option, setOption] = useState('Info')

  const handleSetOption = (param) => {
    setOption(param)
  }

  return (
    <div className="flex flex-row mt-8 items-start">
      <div className="px-4 w-[40%] rounded-md">
        <div
          className={
            option === 'Info'
              ? 'bg-black flex flex-row px-4 py-3 rounded-md items-center mb-2'
              : 'bg-white flex flex-row px-4 py-3 rounded-md items-center mb-2'
          }
          onClick={() => handleSetOption('Info')}
        >
          <img
            className="h-8 object-contain mt-1"
            src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png"
            alt="icon"
          />
          <p
            className={
              option === 'Info'
                ? 'text-white w-[84%] ml-3'
                : 'text-black w-[84%] ml-3'
            }
          >
            Thông tin tài khoản
          </p>
          <ArrowRightOutlined
            className={
              option === 'Info' ? 'text-white text-2xl' : 'text-black text-2xl'
            }
          />
        </div>
        <div
          className={
            option === 'Orders'
              ? 'bg-black flex flex-row px-4 py-3 rounded-md items-center mb-2'
              : 'bg-white flex flex-row px-4 py-3 rounded-md items-center mb-2'
          }
          onClick={() => handleSetOption('Orders')}
        >
          <img
            className="h-8 object-contain mt-1"
            src="https://mcdn.coolmate.me/image/September2023/mceclip4_7.png"
            alt="icon"
          />
          <p
            className={
              option === 'Orders'
                ? 'text-white w-[84%] ml-3'
                : 'text-black w-[84%] ml-3'
            }
          >
            Lịch sử đơn hàng
          </p>
          <ArrowRightOutlined
            className={
              option === 'Orders'
                ? 'text-white text-2xl'
                : 'text-black text-2xl'
            }
          />
        </div>
        <div
          className={
            option === 'UserAdress'
              ? 'bg-black flex flex-row px-4 py-3 rounded-md items-center mb-2'
              : 'bg-white flex flex-row px-4 py-3 rounded-md items-center mb-2'
          }
          onClick={() => handleSetOption('UserAdress')}
        >
          <img
            className="h-8 object-contain mt-1"
            src="https://mcdn.coolmate.me/image/September2023/mceclip2_76.png"
            alt="icon"
          />
          <p
            className={
              option === 'UserAdress'
                ? 'text-white w-[84%] ml-3'
                : 'text-black w-[84%] ml-3'
            }
          >
            Sổ địa chỉ
          </p>
          <ArrowRightOutlined
            className={
              option === 'UserAdress'
                ? 'text-white text-2xl'
                : 'text-black text-2xl'
            }
          />
        </div>
        <div
          className={
            option === 'Review'
              ? 'bg-black flex flex-row px-4 py-3 rounded-md items-center mb-2'
              : 'bg-white flex flex-row px-4 py-3 rounded-md items-center mb-2'
          }
          onClick={() => handleSetOption('Review')}
        >
          <img
            className="h-8 object-contain mt-1"
            src="https://mcdn.coolmate.me/image/September2023/mceclip3_71.png"
            alt="icon"
          />
          <p
            className={
              option === 'Review'
                ? 'text-white w-[84%] ml-3'
                : 'text-black w-[84%] ml-3'
            }
          >
            Đánh giá và phản hồi
          </p>
          <ArrowRightOutlined
            className={
              option === 'Review'
                ? 'text-white text-2xl'
                : 'text-black text-2xl'
            }
          />
        </div>
        <div
          className={
            option === 'Logout'
              ? 'bg-black flex flex-row px-4 py-3 rounded-md items-center mb-2'
              : 'bg-white flex flex-row px-4 py-3 rounded-md items-center mb-2'
          }
          onClick={() => handleSetOption('Logout')}
        >
          <img
            className="h-8 object-contain mt-1"
            src="https://mcdn.coolmate.me/image/September2023/mceclip4_6.png"
            alt="icon"
          />
          <p
            className={
              option === 'Logout'
                ? 'text-white w-[84%] ml-3'
                : 'text-black w-[84%] ml-3'
            }
          >
            Đăng xuất
          </p>
          <ArrowRightOutlined
            className={
              option === 'Logout'
                ? 'text-white text-2xl'
                : 'text-black text-2xl'
            }
          />
        </div>
      </div>
      <div className="bg-white py-12 px-12 w-[59%] rounded-md">
        {option === 'Info' ? (
          <Info />
        ) : option === 'Orders' ? (
          <Orders />
        ) : option === 'UserAdress' ? (
          <UserAdress />
        ) : option === 'Review' ? (
          <Review />
        ) : (
          <p>Xử lý đăng xuất</p>
        )}
      </div>
    </div>
  )
}
export default UserAccount
