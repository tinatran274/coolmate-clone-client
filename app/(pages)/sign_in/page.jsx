'use client'

import React, { useState} from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const SignIn = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleSignin = () => {
        try {
            const options = {
                method: 'POST',
                url: 'https://localhost:7107/api/auth/register',
                data: 
                    {
                        "email": email,
                        "password": password
                    }
                ,
            };
            
            axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
          
            // setData(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    const handleOnchangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleOnchangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = () => {
      router.push('/sign_up')
    }
    const togglePasswordVisibility = () => {
        setIsShowPassword(!isShowPassword);
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
            <b className="ml-4" >Đăng nhập</b>
            <Input className=" mt-5 rounded-full px-4" id="email" type="email" placeholder="Nhập email" value={email} onChange={handleOnchangeEmail} />
            <div className="relative mt-2">
                <span className="absolute top-1.5 right-5 z-10" onClick={() => setIsShowPassword(!isShowPassword)}>{
                    isShowPassword ? (<EyeFilled /> ) : (<EyeInvisibleFilled />)
                }
                </span>
                <Input  className="rounded-full px-4" id="password" placeholder="Nhập mật khẩu" 
                type={isShowPassword ? "text" : "password" } value={password} onChange={handleOnchangePassword}/>
            </div>
        
            <div className="flex justify-between items-center">
                    <p className="text-link cursor-pointer">Quên mật khẩu</p>
                    <Button disabled={!email.length || !password.length} className="my-10 rounded-full p-6 hover:bg-gray-200 hover:text-black" onClick={handleSignUp} >Đăng nhập</Button >
            </div>
            <div className="flex flex-row gap-2">
                <p>Bạn đã có tài khoản?</p>
                <div className="text-link cursor-pointer" onClick={handleSignUp}>Đăng ký</div>
            </div>
        </div>
    </div>
    )
}
export default SignIn
