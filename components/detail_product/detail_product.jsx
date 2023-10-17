'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import { LeftOutlined, RightOutlined, PlusOutlined, MinusOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Button } from "@/components/ui/button"
import { Rate } from 'antd';

const DetailProduct = ({ productId }) => {

    //lấy data từ product id
    const productData = {
        "id": productId,
        "type": "Quần Short Nam",
        "name": "Shorts thể thao 9",
        "cost": "229.000",
        "rating": {
            "time": 7,
            "average": 4
        },
        "color": [{
            "color_name": "Xanh Navy", 
            "imgs": ["https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0061_29.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0060_73.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0087.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0080.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0068.jpg"]}, 
            {
            "color_name": "Đen", 
            "imgs": ["https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0015_33.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0018_10.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0035.jpg",
                    "https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/_CMM0051.jpg"]}, ],
        "size": ["M", "L", "XL", "2XL", "3XL"],
        "feature": ["Chất liệu: 88% Polyester + 12% Spande",
                    "Vải có khả năng thấm hút tốt và nhanh khô",
                    "Co giãn 4 chiều, thoải mái vận động",
                    "Túi to và sâu tiện lợi, thoải mái đựng đồ cá nhân",
                    "Có 1 túi khoá kéo ẩn, đựng vừa chìa khoá hay Airpods",
                    "Độ dài đo từ đũng đến viền ống quần: 9",
                    "Tự hào sản xuất tại Việt Nam"],
        "detail": [ "https://mcdn.coolmate.me/image/October2023/mceclip0_34.jpg",
                    "https://mcdn.coolmate.me/image/October2023/mceclip1_13.jpg",
                    "https://mcdn.coolmate.me/image/October2023/mceclip2_95.jpg",
                    "https://mcdn.coolmate.me/image/October2023/mceclip3_47.jpg"
        ]
        //vân vân mây mây
    }
    const [currentImage, setCurrentImage] = useState(0);
    const [countProduct, setCountProduct] = useState(1);
    const [currentColor, setCurrentColor] = useState(0);
    const [currentSize, setCurrentSize] = useState(0);

    const increaseProduct = () => {
        setCountProduct(countProduct + 1);
    }
    
      const decreaseProduct = () => {
        if(countProduct > 0)
            setCountProduct(countProduct - 1);
    }

    const handleNext = () => {
        setCurrentImage(currentImage === productData.color[currentColor].imgs.length - 1 ? 0 : currentImage + 1);
      }

    const handlePrev = () => {
        setCurrentImage(currentImage === 0 ? productData.color[currentColor].imgs.length - 1 : currentImage - 1);
    }
    const handleChangeCurrentColor = (index) => {
        setCurrentColor(index)
        setCurrentImage(0)
    }

    return(
        <div className='p-4'>
            <span className='text-[12px] text-gray-500 hover:text-blue-500'>Trang chủ</span>
            <span className='text-[12px] mx-2'>/</span>
            <span className='text-[12px] hover:text-blue-500'>{productData.type}</span>
            
            <div className='flex flex-row'>
                <div className="relative w-1/2">
                    <div className="text-center mt-4 mb-4">
                    {productData.color[currentColor].imgs.map((image, index) => (
                        <span
                            key={index}
                            className={`h-1 w-10 inline-block rounded-full mx-2 ${currentImage === index ? 'bg-black' : 'bg-gray-300'}`}
                            onClick={() => setCurrentImage(index)}
                        ></span>
                    ))}
                        
                    </div>
                    <div className='relative flex items-center'>
                        <LeftOutlined className="text-black text-3xl absolute left-4" onClick={handlePrev}/>
                        <img className='rounded-[20px]' src={productData.color[currentColor].imgs[currentImage]}
                            alt={`Slide ${currentImage + 1}`}/>
                        <RightOutlined className="text-black text-3xl absolute right-4" onClick={handleNext}/>
                    </div>
                    <div className="absolute top-16">
                        {productData.color[currentColor].imgs.map((image, index) => (
                            <img className={`w-12 h-12 object-cover m-3 rounded-[15px] cursor-pointer border border-black 
                            ${currentImage === index ? '' : 'opacity-50 border border-gray-400'}`} src={productData.color[currentColor].imgs[index]}
                            alt={`Slide ${currentImage + 1}`} onClick={() => setCurrentImage(index)}/>
                        ))}
                    </div>
                

                </div>
                <div className='mx-20 my-12'>
                    <p className='text-xl font-bold mb-6'>{productData.name}</p>
                    <Rate disabled defaultValue={productData.rating.average} />
                    <span className='ml-2 text-sm'>({productData.rating.time})</span>
                    <p className='text-2xl font-bold mb-8 mt-4'>{productData.cost}đ</p>
                    <p className='mb-2 text-sm'>Màu sắc: <span className='font-bold'>{productData.color[currentColor].color_name}</span></p>
                    {productData.color.map((color, index) => (
                    <Button
                        className={`rounded-full mb-8 mr-4`}
                        onClick={() => handleChangeCurrentColor(index)}
                        >{color.color_name}</Button>))}
                    <p className='mb-2 text-sm'>Kích thước Quần: <span className='font-bold'>{productData.size[currentSize]}</span></p>
                    {productData.size.map((size, index) => (
                        <Button
                            className={`rounded-[15px] p-6 mr-4 bg-gray-300 text-black mb-8 hover:text-white`}
                            onClick={() => setCurrentSize(index)}
                            >{size}</Button>))}
                    <div className='flex flex-row items-center gap-4 mt-4'>
                        <div className='p-2 rounded-full border border-black'>
                            <PlusOutlined className='mx-2' onClick={increaseProduct}/>
                            <span className='font-bold mx-4'>{countProduct}</span>
                            <MinusOutlined className='mx-2' onClick={decreaseProduct}/>
                        </div>
                        <div>
                            <Button className='px-12 py-[21px] rounded-full'><ShoppingOutlined className='mx-2'/>Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                    <hr className='my-12'></hr>
                    <div>
                        <p className='mb-6 text-sm font-bold'>Đặc điểm nổi bật:</p>
                        {productData.feature.map((feature, index) => (
                            <p className={`my-2 text-sm`}><span className='font-bold mr-2'>-</span>{feature}</p>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='my-12'></hr>
            <div className='mx-28'>
                <p className='mb-6 text-2xl font-bold'>Chi tiết sản phẩm</p>
                {productData.detail.map((detail, index) => (
                    <img className="mb-4" src={detail} alt={`detail ${index}`}/>
                ))}
            </div>
        </div>

    )
}
export default DetailProduct
