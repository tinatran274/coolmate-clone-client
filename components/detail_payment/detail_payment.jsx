/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import CardItemPay from './UI_component/card_item'
import { Rate } from 'antd'

const DetailPayment = (props) => {
  const addDotsToNumber = (number) => {
    if (number) {
      const numberString = number.toString()
      const length = numberString.length
      let result = ''
      for (let i = 0; i < length; i++) {
        result += numberString[i]
        if ((length - i - 1) % 3 === 0 && i !== length - 1) result += '.'
      }
      return result
    }
  }
  const priceMemo = useMemo(() => {
    const total = props.data.listProduct.reduce((total, cur) => {
      return total + parseInt(cur.price) * parseInt(cur.qty)
    }, 0)
    return total
  }, [])

  // console.log(props.data.listProduct)

  return (
    <div className="p-8 w-[100%]">
      <p className="text-center text-4xl font-bold my-16">
        ĐẶT HÀNG THÀNH CÔNG!
      </p>
      <p className="text-center text-sm">
        Trên thị trường có quá nhiều sự lựa chọn, cảm ơn bạn đã lựa chọn mua sắm
        tại
        <span className="font-bold"> Coolmate.me </span>
      </p>
      <div className="flex justify-center my-8">
        <p className="text-center text-sm w-[70%] ">
          Đơn hàng của bạn CHẮC CHẮN đã được chuyển tới hệ thống xử lý đơn hàng
          của Coolmate. Trong quá trình xử lý Coolmate sẽ liên hệ lại nếu như
          cần thêm thông tin từ bạn. Ngoài ra Coolmate cũng sẽ có gửi xác nhận
          đơn hàng bằng Email và tin nhắn
        </p>
      </div>
      <p className="text-center text-sm">
        Tham gia cộng đồng{' '}
        <span className="font-bold"> Mặc Đẹp Sống Chất </span> cùng Coolmate.
      </p>
      <div className="flex justify-center">
        <Button className="rounded-full text-lg p-8 my-16 hover:bg-blue-500 ">
          Khám phá thêm các sản phẩm khác tại đây
        </Button>
      </div>
      <p className="text-center text-3xl ">Thông tin đơn hàng id</p>
      <div className="bg-gray-200 mx-4 rounded-b-md rounded-t-xl mt-6">
        <div className="flex justify-between bg-blue-700 px-4 py-3 rounded-xl mt-6">
          <p className="text-sm font-bold text-white">Tên sản phẩm</p>
          <p className="text-sm font-bold text-white">Số lượng</p>
          <p className="text-sm font-bold text-white">Giá niêm yết</p>
          <p className="text-sm font-bold text-white">Biến thể</p>
          <p className="text-sm font-bold text-white">Thành tiền</p>
        </div>
        <div className="px-3 pb-1">
          {props.data.listProduct.map((product, index) => {
            return (
              <CardItemPay
                key={index}
                name={product.name}
                price={product.price}
                num={product.qty}
                img={product.img}
                sizeChose={product.size}
                colorChose={product.color}
              />
            )
          })}
        </div>
      </div>
      <div className="px-3 my-10">
        <div className="flex flex-row justify-between  mb-4">
          <p className="">Tổng giá trị sản phẩm:</p>
          <p className="">{addDotsToNumber(priceMemo)}đ</p>
        </div>
        <hr className="my-6"></hr>
        <div className="flex flex-row justify-between mb-4">
          <p className="">Mã giảm giá:</p>
          <p className=""></p>
        </div>
        <hr className="my-6"></hr>
        <div className="flex flex-row justify-between mb-4">
          <p className="">Tổng khuyến mãi:</p>
          <p className="">0đ</p>
        </div>
        <hr className="my-6"></hr>
        <div className="flex flex-row justify-between mb-4">
          <p className="">Phí giao hàng:</p>
          <p className="">Miễn phí</p>
        </div>

        <div className="flex flex-row justify-between px-6 py-4 mt-6 rounded-b-xl bg-black text-white mb-4">
          <p className="font-bold text-lg">Tổng thanh toán:</p>
          <p className="font-bold text-lg">{addDotsToNumber(priceMemo)}đ</p>
        </div>
      </div>
      <p className="text-center text-3xl ">Thông tin nhận hàng</p>
      <div className="flex gap-10 bg-gray-200 mx-4 rounded-xl mt-6 py-5 px-8 mb-10">
        <div>
          <p className="text-sm my-1">Tên người nhận:</p>
          <p className="text-sm my-1">Email:</p>
          <p className="text-sm my-1">Số điện thoại:</p>
          <p className="text-sm my-1">Hình thức thanh toán:</p>
          <p className="text-sm my-1">Địa chỉ nhận hàng:</p>
        </div>
        <div>
          <p className="text-sm my-1">{props.data.username}</p>
          <p className="text-sm my-1">{props.data.email}</p>
          <p className="text-sm my-1">{props.data.phone}</p>
          <p className="text-sm my-1">{props.data.optionPay}</p>
          <p className="text-sm my-1">
            {props.data.adress}, {props.data.district}, {props.data.city},{' '}
            {props.data.province}
          </p>
        </div>
      </div>
    </div>
  )
}
export default DetailPayment
