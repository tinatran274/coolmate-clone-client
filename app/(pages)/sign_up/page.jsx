'use client'

import React, { useState} from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const SignUp = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter()
  

    const handleSignin = () => {
        router.push('/sign_in')
    }
    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleOnchangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleOnchangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSignUp = () => {
    }


  return(
    <div className="flex items-center justify-center bg-white">
        <div className="w-1/2 p-20 m-10 rounded-lg shadow-md">
            <div className="flex justify-center items-center">
                <Image
                src="/images/img_logo.png"
                alt="logo"
                width={100} 
                height={50} 
            />
            </div>
            <b>Đăng ký</b>
            <Input className="mt-5" id="email" type="email" placeholder="Nhập email" value={email} onChange={handleOnchangeEmail} />
            <div className="relative mt-2">
                <span className="absolute top-1.5 right-5 z-10" onClick={() => setIsShowPassword(!isShowPassword)}>{
                    isShowPassword ? (<EyeFilled /> ) : (<EyeInvisibleFilled />)
                }
                </span>
                <Input id="password" placeholder="Nhập mật khẩu" 
                type={isShowPassword ? "text" : "password" } value={password} onChange={handleOnchangePassword}/>
            </div>
            <div className="relative mt-2">
                <span className="absolute top-1.5 right-5 z-10" onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>{
                        isShowConfirmPassword ? (<EyeFilled /> ) : (<EyeInvisibleFilled />)
                    }
                </span>
                <Input id="confirm_password" placeholder="Nhập lại mật khẩu"
                type={isShowPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword}/>
            </div>
    
            <Button className="my-10" onClick={handleSignUp} >Đăng ký</Button >
            <div className="flex flex-row gap-2">
                <p>Bạn đã có tài khoản?</p>
                <div className="text-link cursor-pointer" onClick={handleSignin}>Đăng nhập</div>
            </div>
        </div>
    </div>
  )
}
export default SignUp
