"use client"

import Link from "next/link"
import React, { useState} from 'react'
import { useRouter } from 'next/navigation'
import {Drawer, Steps, Col, Row } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Button } from "@/components/ui/button"

export function UserDetailIcon() {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleSignIn = () => {
        router.push('/sign_in')
    }

    const showDrawer = () => {
        setOpen(true);
    }
      const onClose = () => {
        setOpen(false);
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    const handleMoveToUserDetail = () => {
        router.push('/account')
    }


    return (
        <div>
            <UserOutlined className="text-white text-3xl" onClick={showDrawer}/>
            <Drawer title={<h2 style={{ fontSize: 40, }}>HI, TRẦN THỊ HỒNG NHUNG</h2>}
                placement="right" onClose={onClose} open={open} size="large" 
                footer={
                    <div style={{ textAlign: 'center', fontSize: 16, padding: 18, cursor: "pointer",
                    backgroundColor: isHovered ? '#4C4C4C' : '#2F5ACF' , color: "white",  }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMoveToUserDetail}>
                      ĐI ĐẾN TÀI KHOẢN
                    </div>
                }>
               <div className='bg-gray-100 px-4 py-6 mx-8 rounded-md'>
                    <p className='my-2'>Chi tiêu thêm</p>
                    <p className='font-bold text-blue-700 text-2xl my-2'>500.000đ</p>
                    <div className='flex my-2 items-center'>
                        <p className=''>để lên hạng </p>
                        <img className='h-8 object-contain ml-1' src="https://mcdn.coolmate.me/image/September2023/mceclip0_56.png" alt="icon"/>
                    </div>
                    <Steps className='my-6'
                        progressDot
                        current={0}
                        items={[{ 
                            title: <img className='w-8 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip0_80.png" alt="icon"/>} , { 
                            title: <img className='w-8 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip2_55.png" alt="icon"/>}, { 
                            title: <img className='w-8 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip3_94.png" alt="icon"/>,},{ 
                            title: <img className='w-8 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip1_100.png" alt="icon"/>,},
                        ]}
                    />
                    <p className='italic text-gray-500'>Hạng thành viên sẽ được cập nhật lại sau 31/12/2023</p>
               </div>
               <div className='mx-4 mt-4 mb-20'>
                    <div className='flex px-4 justify-between'>
                        <div className='bg-gray-100 px-10 py-4 rounded-md flex flex-col items-center'>
                            <img className='w-10 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip1_59.png"/>
                            <p className='w-20 mt-1 text-center'>Ví voucher</p>
                        </div>
                        <div className='bg-gray-100 px-10 py-4 rounded-md flex flex-col items-center'>
                            <img className='w-10 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip0_18.png"/>
                            <p className='w-20 mt-1 text-center'>Lịch sử đơn hàng</p>
                        </div>
                        <div className='bg-gray-100 px-10 py-4 rounded-md flex flex-col items-center'>
                            <img className='w-10 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip2_76.png"/>
                            <p className='w-20 mt-1 text-center'>Sổ địa chỉ</p>
                        </div>
                    </div>
                    <div className='flex px-4 py-4 justify-between'>
                        <div className='bg-gray-100 px-10 py-4 rounded-md flex flex-col items-center'>
                            <img className='w-10 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip6_34.png"/>
                            <p className='w-20 mt-1 text-center'>Cài đặt tài khoản</p>
                        </div>
                        <div className='bg-gray-100 px-10 py-4 rounded-md flex flex-col items-center'>
                            <img className='w-10 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip3_71.png"/>
                            <p className='w-20 mt-1 text-center'>Đánh giá và phản hồi</p>
                        </div>
                        <div className='bg-gray-100 px-10 py-4 rounded-md flex flex-col items-center'>
                            <img className='w-10 object-contain' src="https://mcdn.coolmate.me/image/September2023/mceclip5_95.png"/>
                            <p className='w-20 mt-1 text-center'>FAQ & Chính sách</p>
                        </div>
                    </div>
               </div>
            </Drawer>
        </div>
    )
}
