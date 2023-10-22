'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined,
  } from '@ant-design/icons'
  import {Badge} from 'antd';

const CardItemCart = (props) => {

    const increaseProduct = () => {
        props.onNumChange(props.name, props.num+1 )
      }
    
    const decreaseProduct = () => {
        if (props.num > 1) 
            props.onNumChange(props.name, props.num - 1);
    }
    const deleteProduct = () => {
        props.onNumChange(props.name, 0);
    }
    
    return(
        <div className='w-[100%] flex flex-column'>
             <div className='w-44 h-56 mr-6'>
                <Badge count={props.num} color='black'>
                    <img className='object-contain rounded-2xl' src={props.img} alt="icon"/>
                </Badge>
            </div>
             
            <div className='w-[100%]'> 
                <p   className='font-bold'>{props.name}</p>
                <p>{props.color}/{props.size}</p>
                <div className='flex flex-column mt-8 gap-1'>
                    <p className="text-xs px-2 py-1 rounded-lg border border-black inline-block"> {props.color}</p>
                    <p className="text-xs px-2 py-1 rounded-lg border border-black inline-block">{props.size}</p>
                </div>
                <div className="px-2 rounded-lg border border-black inline-block mt-1">
                    <PlusOutlined className="w-3 h-3" onClick={increaseProduct} />
                    <span className="mx-4">{props.num}</span>
                    <MinusOutlined className="w-3 h-3" onClick={decreaseProduct} />
                </div>
                <p className='font-bold mt-3'>{props.price}đ</p>
            </div>
            <div><CloseOutlined onClick={deleteProduct} /></div>
        </div>

    )
}
export default CardItemCart
