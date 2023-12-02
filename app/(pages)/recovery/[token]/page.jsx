'use client'

import React, { useMemo, useState } from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { notification } from 'antd'
import { isPasswordValid } from '@/lib/utils'

const RecoveryPass = () => {
  const [api, contextHolder] = notification.useNotification()
  // const params = useParams()
  const openNotification = (description) => {
    api.info({
      message: `Notification`,
      description: description,
      placement: 'topRight',
      duration: 2
    })
  }

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  const handleOnchangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleOnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleRecovery = () => {
    if (!isPasswordValid(password) || !isPasswordValid(confirmPassword)) {
      openNotification(
        `Mật khẩu phải bao gồm 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự số và có độ dài lớn hơn 8 ký tự`
      )
    } else if (password !== confirmPassword) {
      openNotification(`Mật khẩu không trùng khớp`)
    } else if (password === confirmPassword) {
      router.push('/sign-in')
    }
  }

  return (
    <div className="flex items-center justify-center bg-white">
      {contextHolder}

      <div className="w-1/2 p-20 m-10 rounded-lg shadow-md">
        <div className="flex justify-center items-center">
          <Image
            src="/images/img_logo.png"
            alt="logo"
            width={100}
            height={50}
          />
        </div>
        <b className="ml-4">Cấp lại mật khẩu</b>

        <div className="relative mt-2">
          <span
            className="absolute top-1.5 right-5 z-10"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
          </span>
          <Input
            className="rounded-full px-4"
            id="password"
            placeholder="Nhập mật khẩu"
            type={isShowPassword ? 'text' : 'password'}
            value={password}
            onChange={handleOnchangePassword}
          />
        </div>
        <div className="relative mt-4">
          <span
            className="absolute top-1.5 right-5 z-10"
            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
          >
            {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
          </span>
          <Input
            className="rounded-full px-4"
            id="confirm_password"
            placeholder="Nhập lại mật khẩu"
            type={isShowConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleOnchangeConfirmPassword}
          />
        </div>
        <Button
          className="my-10 w-[100%] rounded-full p-6 hover:bg-gray-200 hover:text-black"
          onClick={handleRecovery}
        >
          Cập nhật
        </Button>
      </div>
    </div>
  )
}
export default RecoveryPass
