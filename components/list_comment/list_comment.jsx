'use client'

import React, {useState, useEffect} from 'react'
import { Rate } from 'antd';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const ListComment = ({ productId  }) => {

    const cmtData = {
        "id": productId,
        "list_cmt": [{
                "user_name": "Huy Cường",
                "bought": "Đen / L",
                "rating": 4,
                "content": "sản phẩm oke, mặc khá là thoải mái và nhẹ, đồ tặng kèm là áo cotton nên mặc mát",
                "reply": "Coolmate cảm ơn anh đã đánh giá khách quan trải nghiệm. Mong mình có trải nghiệm thật tuyệt vời với sản phẩm. Nếu trong quá trình trải nghiệm có phát sinh vấn đề không mong muốn. Anh có thể liên hệ hotline 1900272737 để được hỗ trợ đổi trả trong vòng 60 ngày nhé. Có rất nhiều sự lựa chọn, cảm ơn anh đã tin tưởng và lựa chọn Coolmate. Chúc anh một ngày tốt lành.",
                "date": "25.09.2023"},
            {
                "user_name": "Nguyễn Lê Khang",
                "bought": "Xanh Navy / L",
                "rating": 5,
                "content": "quần mặc rất thoải mái, nhưng mình có 1 góp ý là nên thêm dây thắt bên trong vì độ dài thì ok nhưng lưng quần lại hơi rộng.",
                "reply": "Coolmate xin cảm ơn chân thành nhất tới chị đã quan tâm, gắn bó và tin tưởng sử dụng dịch vụ của Coolmate trong suốt thời gian vừa qua. ",
                "date": "22.04.2023"},
            {
                "user_name": "jametran3392",
                "bought": "Đen / XL",
                "rating": 1,
                "content": "Mặc vải thoáng mát, thoải mái, rất tiện dụng",
                "date": "15.09.2023s"},            
        ]

    }
    return(
        <div className='p-4 flex flex-row mt-4'>
            <div className=' px-12 py-8 flex flex-col items-center rounded-[12px] w-[900px]'>
                <p className='text-lg font-bold mb-4 uppercase'>Đánh giá</p>
                <p className='text-6xl font-bold mb-3'>4.5</p>
                <Rate className='text-3xl mb-3' disabled defaultValue={4} />
                <p className='text-sm italic'>7 đánh giá</p>
            </div>
            <div className=''>
                <div className='flex flex-row mb-8'>
                    <Select 
                    // onValueChange={field.onChange} 
                    // defaultValue={field.value}
                    >
                        <SelectTrigger className="p-6 rounded-full mr-8">
                            <SelectValue placeholder="5 sao" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="5 sao">5 sao</SelectItem>
                            <SelectItem value="4 sao">4 sao</SelectItem>
                            <SelectItem value="3 sao">5 sao</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select 
                    // onValueChange={field.onChange} 
                    // defaultValue={field.value}
                    >
                        <SelectTrigger className="p-6 rounded-full mr-8">
                            <SelectValue placeholder="Không ảnh" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Không ảnh">Không ảnh</SelectItem>
                            <SelectItem value="Có ảnh">Có ảnh</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select 
                    // onValueChange={field.onChange} 
                    // defaultValue={field.value}
                    >
                        <SelectTrigger className="p-6 rounded-full mr-8">
                            <SelectValue placeholder="Phản hồi" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Phản hồi">Phản hồi</SelectItem>
                            <SelectItem value="Đã phản hồi">Đã phản hồi</SelectItem>
                            <SelectItem value="Chưa phản hồi">Chưa phản hồi</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
                <div className={'flex flex-row flex-wrap'}>
                    {cmtData.list_cmt.map((cmt, index) => (
                        
                        <div className={`my-2 text-sm w-1/2 pr-8 pb-8`}>
                            <Rate className='text-blue-800  mb-3' disabled defaultValue={4} />
                            <p className={`font-bold`}>{cmt.user_name}</p>
                            <p className={`italic text-gray-500 mb-7`}>{cmt.bought}</p>
                            <p>{cmt.content}</p>
                            { cmt.reply ? 
                                <p className={`bg-gray-300 p-4 rounded-2xl mt-2`}>{cmt.reply}</p> : ""    
                            }
                            
                            <p className={`text-gray-500 rounded-2xl mt-4`}>{cmt.date}</p>
                        </div>
                    ))}
                </div>
                <div>
                </div>
            </div>

        </div>
    )
}
export default ListComment
