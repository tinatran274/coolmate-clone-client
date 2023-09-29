'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'
import { Input, Space } from 'antd';
import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const NavBar = () => {

    const router = useRouter();

    const handleSignIn = () => {
        router.push('/sign_in')
    }
  
    return(
        <nav className="bg-black py-1">
            <div className="flex justify-between items-center">
                <div className="container mx-auto flex items-center">
                    <Image src="/images/img_logo2.png" alt="logo" width={80} height={40} />
                    <ul className="flex text-white">
                        <li><Link className="px-5" href="#">SALE</Link></li>
                        <li><Link className="px-5" href="#">ĐỒ LÓT NAM</Link></li>
                        <li><Link className="px-5" href="#">MẶC HẰNG NGÀY</Link></li>
                        <li><Link className="px-5" href="#">ĐỒ THỂ THAO</Link></li>
                        <li><Link className="px-5" href="#">STREETWEAR</Link></li>
                        <li><Link className="px-5" href="#">NƯỚC HOA</Link></li>
                    </ul>
                </div>
                <div className="flex items-center mr-7">
                    <Input placeholder="Search..." prefix={<SearchOutlined />}/>
                    <UserOutlined className="text-white text-3xl" onClick={handleSignIn}/>
                    <ShoppingCartOutlined className="text-white text-3xl"/>
                </div>
            </div>
            
        </nav>

    )
}
export default NavBar
