'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined,
  } from '@ant-design/icons'
  import {Badge} from 'antd';
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { ScrollArea } from "@/components/ui/scroll-area"

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

    const changeSize = (value) => {
        props.onSizeChange(props.name, value)
    }
    const changeColor = (value) => {
        for (const i in props.listColor) {
            if (props.listColor[i].color_name === value) {
                props.onColorChange(props.name, value, props.listColor[i].imgs)
            }
        }
    }
    const getImg = () => {
        for (const i in props.listColor) {
            if (props.listColor[i].color_name === props.colorChose) {
                return props.listColor[i].imgs;
            }
        }
        return ""
    }
    
    return(
        <div className='w-[100%] flex flex-column'>
             <div className='w-44 h-56 mr-6'>
                <Badge count={props.num} color='black'>
                    <img className='object-contain rounded-2xl' src={getImg()} alt="icon"/>
                </Badge>
            </div>
             
            <div className='w-[100%]'> 
                <p className='font-bold'>{props.name}</p>
                <p className='text-sm'>{props.colorChose} / {props.sizeChose}</p>
                <div className='flex flex-column mt-6 gap-1'>
                    <Select defaultValue={props.colorChose} onValueChange={changeColor}> 
                        <SelectTrigger className="w-[100px] h-7 text-xs rounded-lg px-2 border border-black"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <ScrollArea>
                                <SelectGroup >{props.listColor.map((item, index) => (
                                    <SelectItem className="text-xs" key={index} value={item.color_name}>{item.color_name}</SelectItem>))}
                                </SelectGroup>
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                    <Select defaultValue={props.sizeChose} onValueChange={changeSize}> 
                        <SelectTrigger className="w-[60px] h-7 text-xs rounded-lg px-2 border border-black"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            <ScrollArea >
                                <SelectGroup>{props.listSize.map((item, index) => (
                                    <SelectItem className="text-xs" key={index} value={item}>{item}</SelectItem>))}
                                </SelectGroup>
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                </div>
                <div className="px-2 rounded-lg border border-black inline-block mt-1">
                    <PlusOutlined className="w-3 h-3" onClick={increaseProduct} />
                    <span className="mx-4 text-sm">{props.num}</span>
                    <MinusOutlined className="w-3 h-3" onClick={decreaseProduct} />
                </div>
                <p className='font-bold mt-3'>{props.price}đ</p>
            </div>
            <div><CloseOutlined onClick={deleteProduct} /></div>
        </div>

    )
}
export default CardItemCart
