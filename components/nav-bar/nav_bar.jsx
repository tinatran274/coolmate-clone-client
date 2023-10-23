'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'
import { Input, Space } from 'antd';
import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import SaleNavBar from './UI_component/sale_nav_bar';
import { MenuItem } from './UI_component/nav_bar_test';
import { ShoppingCart } from './UI_component/shopping_cart';

const NavBar = () => {

    const router = useRouter();

    const handleSignIn = () => {
        router.push('/sign_in')
    }
    const handleHome = () => {
        router.push('/')
    }
    return(
        <div>
            <nav className="bg-black py-1">
                <div className="flex justify-between items-center">
                    <div className="container mx-auto flex items-center">
                        <Image src="/images/img_logo2.png" alt="logo" width={80} height={40} onClick={handleHome}/>
                        <MenuItem/>
                    </div>
                    <div className="flex items-center mr-7">
                        <Input placeholder="Search..." prefix={<SearchOutlined />}/>
                        <UserOutlined className="text-white text-3xl" onClick={handleSignIn}/>
                        <ShoppingCart/>
                    </div>
                </div>
                
            </nav>
           
        </div>
        

    )
}
export default NavBar
