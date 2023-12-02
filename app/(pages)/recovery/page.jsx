'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Input } from '@nextui-org/input'

const SignIn = () => {
  const [email, setEmail] = useState('')

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid = React.useMemo(() => {
    if (email === '') return false

    return validateEmail(email) ? false : true
  }, [email])
  const router = useRouter()

  return (
    <div className="flex items-center justify-center bg-white relative">
      <div
        className="absolute top-20 left-[430px]"
        onClick={() => router.push('/sign-in')}
      >
        <IoIosArrowRoundBack className="h-7 w-7 cursor-pointer" />
      </div>
      <div className="w-1/2 p-20 m-10 rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/images/img_logo.png"
            alt="logo"
            width={100}
            height={50}
          />
        </div>
        <b className="ml-4 mb-4">Cấp lại mật khẩu</b>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          variant="bordered"
          isInvalid={isInvalid}
          color={isInvalid && 'danger'}
          errorMessage={isInvalid && 'Please enter a valid email'}
          onValueChange={setEmail}
          size="sm"
          className="mt-5 rounded-full px-4"
        />
        <div className="flex justify-between items-center w-full">
          <Button
            disabled={!email.length || isInvalid}
            className=" my-5 rounded-full p-3 hover:bg-gray-200 hover:text-black w-full"
            onClick={() => router.push('/recovery/123123123')}
          >
            Kiểm tra
          </Button>
        </div>
      </div>
    </div>
  )
}
export default SignIn
