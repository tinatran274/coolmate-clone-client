'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { Input, Space } from 'antd';
import { User, Archive, Box } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import { MenuItem } from './UI_component/nav_bar_test'
import { UserDetailIcon } from './UI_component/user_detail_icon'
import SearchNavBar from './UI_component/search_navbar'

const iconMap = {
  0: <User className="mr-4 w-4 h-4" />,
  1: <Archive className="mr-4 w-4 h-4" />,
  2: <Box className="mr-4 w-4 h-4" />
}
const NavBar = () => {
  const router = useRouter()

  const handleSignIn = () => {
    router.push('/sign_in')
  }
  const handleHome = () => {
    router.push('/')
  }
  const handleCart = () => {
    router.push('/cart')
  }
  return (
    <div>
      <nav className="bg-black py-1">
        <div className="flex justify-between items-center">
          <div className="container mx-auto flex items-center cursor-pointer">
            <Image
              src="/images/img_logo2.png"
              alt="logo"
              width={80}
              height={40}
              onClick={handleHome}
            />
            <MenuItem />
          </div>
          <div className="flex items-center mr-7 gap-3">
            {/* clientsearch */}
            {/* <Input placeholder="Search..." prefix={<SearchOutlined />} /> */}
            {/* adminsearch */}
            <SearchNavBar
              data={[
                {
                  label: 'Customers',
                  type: 'customers',
                  data: [
                    {
                      id: 1,
                      name: 'Test1',
                      icon: iconMap[0]
                    }
                  ]
                },
                {
                  label: 'Products',
                  type: 'products',
                  data: [
                    {
                      id: 2,
                      name: 'Test',
                      icon: iconMap[1]
                    }
                  ]
                },
                {
                  label: 'Orders',
                  type: 'orders',
                  data: [
                    {
                      id: 3,
                      name: 'Test',
                      icon: iconMap[2]
                    }
                  ]
                }
              ]}
            />
            <UserDetailIcon />
            <ShoppingCartOutlined
              onClick={handleCart}
              className="text-white text-3xl"
            />
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar
