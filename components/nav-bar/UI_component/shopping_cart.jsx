"use client"

import Link from "next/link"
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'
import NomalTextNav from './nomal_txt_nav'
import HeaderTextNav from './header_txt_nav'
import ImgTxtNav from './img_txt_nav'
import ImgNav from './img_nav'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';


export function ShoppingCart() {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem >
            <NavigationMenuTrigger>
            <ShoppingCartOutlined className="text-white text-3xl"/>
            </NavigationMenuTrigger>
            <NavigationMenuContent >
                <div className="bg-white p-2 w-[500px]">
                    <div className="flex justify-between">
                        <div className="ml-1">
                            <HeaderTextNav content="Theo sản phẩm"/>
                            <NomalTextNav content="Tất cả"/>
                            <NomalTextNav content="Sản phẩm mới"/>
                        </div>
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

