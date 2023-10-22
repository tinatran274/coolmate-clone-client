'use client'

import React, {useState, useEffect, useMemo} from 'react'
import { Rate } from 'antd';
import CardItemCart from './UI_component/card_item';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import  TinhTP  from '../../hanhchinhvn/tinh_tp.json'
import  QuanHuyen  from '../../hanhchinhvn/quan_huyen.json'
import  XaPhuong  from '../../hanhchinhvn/xa_phuong.json'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


const ListItemCart = () => {

    const templistItemCart = [{
        name: "T-Shirt Cotton 220GSM",
        img: "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/September2023/trang189_2.jpg",
        price: "850000",
        num: 5,
        color: "Trắng",
        size: "M" 
        }, {
        name: "Áo dài tay Cotton Compact V2",
        img: "https://media.coolmate.me/cdn-cgi/image/width=320,height=362,quality=80/image/October2023/DT003.2_56.jpg",
        price: "269000",
        num: 1,
        color: "Đen",
        size: "XL" 
        }
    ]

    const [listProvince, setListProvince] = useState(Object.entries(TinhTP).map(([key, value]) => ({ name: value.name, code: value.code })));
    const [listCity, setListCity] = useState([]);
    const [listDistrict, setListDistrict] = useState([]);
    const [province, setProvince] = useState({});
    const [city, setCity] = useState({});
    const [district, setDistrict] = useState({});
    const [optionPay, setOptionPay] = useState("option-one");
    const [listProduct, setListProduct] = useState(templistItemCart);

    const handleSetProvince = (value) => {
        for (const code in TinhTP) {
            if (TinhTP[code].name === value) {
                const temp = { name: value, code: TinhTP[code].code }
                setProvince(temp)
                const filterCity = Object.keys(QuanHuyen)
                    .filter(key => QuanHuyen[key].parent_code === TinhTP[code].code)
                    .map(key => ({name: QuanHuyen[key].name_with_type, code: key}));
                setListCity(filterCity)
            }
        }
    }
    const handleSetCity = (value) => {
        for (const code in QuanHuyen) {
            if (QuanHuyen[code].name_with_type === value) {
                const temp = { name: value, code: QuanHuyen[code].code }
                setCity(temp)
                const filterDistrict = Object.keys(XaPhuong)
                    .filter(key => XaPhuong[key].parent_code === QuanHuyen[code].code)
                    .map(key => ({name: XaPhuong[key].name_with_type, code: key}));
                    setListDistrict(filterDistrict)
            }
        }
    }
    const handleSetDistrict = (value) => {
        for (const code in XaPhuong) {
            if (XaPhuong[code].name_with_type === value) {
                const temp = { name: value, code: XaPhuong[code].code }
                setDistrict(temp)
            }
        }
    }
    const handlePay = (value) => {
        setOptionPay(value)
    }

    const handleNumChange = (name, num) => {
        if(num > 0){
            console.log(name+ " "+ num)
            const newArray1 = listProduct.map(item => {
                if (item.name === name) {
                return { ...item, num: num};
                }
                return item;
            });
            setListProduct(newArray1)
        } else { 
            const array1 = listProduct.filter(item => item.name !== name);
            setListProduct(array1)   
        }
    }
    const priceMemo = useMemo(() => {
        const total = listProduct.reduce((total, cur) => {
            return total + ((parseInt(cur.price) * parseInt(cur.num)))
        }, 0)
        return total
    },[listProduct])

    const addDotsToNumber = (number) => {
        if(number) {
            const numberString = number.toString();
            const length = numberString.length;
            let result = "";
        
            for (let i = 0; i < length; i++) {
            result += numberString[i];
            if ((length - i - 1) % 3 === 0 && i !== length - 1) {
                result += ".";
            }
            }
            return result;
        }
    }
    return(
        <div className='p-4 flex flex-row'>
            <div className='w-[60%]'>
                <div className='bg-gray-100 px-4 py-6 rounded-md mt-4'>
                    <p className='uppercase font-bold text-4xl'>Hi, Trần Nhung</p>
                    <p>Tổng đơn (3 sản phẩm) <span className='text-blue-600 font-bold'>{addDotsToNumber(priceMemo)}</span></p>
                </div>
                <p className='font-bold text-3xl px-4 mt-12 mb-8'>Thông tin vận chuyển</p>
                <div className='px-4 flex flex-row gap-4 mb-5'>
                    <Input className="rounded-full px-4" type="text" placeholder="Họ tên" />
                    <Input className="rounded-full px-4" type="text" placeholder="Số điện thoại" />
                </div>
                <div className='px-4'>
                    <Input className="rounded-full px-4 mb-5" type="text" placeholder="Email" />
                    <Input className="rounded-full px-4 mb-5" type="text" placeholder="Địa chỉ" />
                </div>
                <div className='flex flex-row justify-between px-4 mb-5'>
                    <Select onValueChange={handleSetProvince}> 
                        <SelectTrigger className="w-[200px] rounded-full px-4"><SelectValue placeholder="Chọn Tỉnh/Thành phố"/></SelectTrigger>
                        <SelectContent>
                            <ScrollArea className="h-64 w-48">
                                <SelectGroup>{listProvince.map((item, index) => (
                                    <SelectItem key={item.code} value={item.name}>{item.name}</SelectItem>))}
                                </SelectGroup>
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                    <Select onValueChange={handleSetCity}>
                        <SelectTrigger className="w-[200px] rounded-full px-4"><SelectValue placeholder="Chọn Quận/Huyện" /></SelectTrigger>
                        <SelectContent>
                            <ScrollArea className="h-64 w-48">
                                <SelectGroup> {listCity.map((item, index) => (
                                    <SelectItem key={item.code} value={item.name}>{item.name}</SelectItem>))}
                                </SelectGroup>
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                    <Select onValueChange={handleSetDistrict}>
                        <SelectTrigger className="w-[200px] rounded-full px-4s"><SelectValue placeholder="Chọn Phường/Xã" /></SelectTrigger>
                        <SelectContent>
                            <ScrollArea className="h-64 w-48">
                                <SelectGroup>{listDistrict.map((item, index) => (
                                    <SelectItem key={item.code} value={item.name}>{item.name}</SelectItem>))}
                                </SelectGroup>
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                </div>
                <div className='px-4'>
                    <Input className="rounded-full px-4 mb-5" type="text" placeholder="Ghi chú thêm" />
                </div>
                <div className="flex items-center space-x-2 px-4">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Lưu vào sổ địa chỉ để dùng cho lần mua hàng tiếp theo
                    </label>
                </div>
                <p className='font-bold text-3xl px-4 mt-12 mb-6'>Hình thức thanh toán</p>
                <RadioGroup  className='px-4' defaultValue={optionPay} onValueChange={handlePay}>
                    <div className= {optionPay=="option-one" ? 
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" : 
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="option-one" id="option-one" />
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/momo-icon.png" alt="icon"/>
                        <p className=''>Thanh toán Momo</p>
                    </div>
                    <div className= {optionPay=="option-two" ? 
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" : 
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="option-two" id="option-two" />
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/COD.svg" alt="icon"/>
                        <p className=''>Thanh toán khi nhận hàng</p>
                    </div>
                    <div className= {optionPay=="option-three" ? 
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" : 
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="option-three" id="option-three" />
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/logo-zalopay.svg" alt="icon"/>
                        <p className=''>Ví điện tử ZaloPay</p>
                    </div>
                    <div className= {optionPay=="option-four" ? 
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" : 
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="option-four" id="option-four" />
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/vnpay.png" alt="icon"/>
                        <p className=''>Thẻ ATM/Thẻ tín dụng (Credit card)/Thẻ ghi nợ (Debit card)</p>
                    </div>
                    <div className= {optionPay=="option-five" ? 
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" : 
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="option-five" id="option-five" />
                        <img className='w-8 object-contain mr-4' src="https://sandbox.flexmoney.vn/static/media/logo-login.cd69de6e7b8ff1cc0e4d74762ee7d40b.svg" alt="icon"/>
                        <p className=''>Chuyển khoản liên ngân hàng bằng QR Code</p>
                    </div>
                </RadioGroup>
                <p className='px-4 mb-8'>Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm 
                <span className='font-bold'> tại đây</span>.</p>
                <div className='px-4' >
                    <Button className='rounded-lg p-6 w-[100%] hover:bg-gray-200 hover:text-black'>Thanh toán {addDotsToNumber(priceMemo)}đ</Button>
                </div>

            </div>
            <div className="h-auto border mx-3 border-gray-200"></div>
            <div className='w-[38%]'>
                <p className='font-bold text-3xl px-3 mt-8 mb-8'>Giỏ hàng</p>
                <div className='px-3'>
                    {listProduct && listProduct.map((product, index) => {
                    return (
                    <CardItemCart listItems={listProduct} onNumChange={handleNumChange}
                        key={index}
                        name={product.name}
                        price={addDotsToNumber(product.price)}
                        img={product.img}
                        num={product.num}
                        size={product.size}
                        color={product.color}/>
                    )})}
                </div>

                <hr className="my-10"></hr>
                <div className='flex flex-row justify-between  mb-4'>
                    <p className=''>Tạm tính:</p>
                    <p className=''>{addDotsToNumber(priceMemo)}đ</p>
                </div>
                <div className='flex flex-row justify-between mb-4'>
                    <p className=''>Giảm giá:</p>
                    <p className=''>0đ</p>
                </div>
                <div className='flex flex-row justify-between mb-4'>
                    <p className=''>Phí giao hàng:</p>
                    <p className=''>Miễn phí</p>
                </div>
                <hr className="my-8"></hr>
                <div className='flex flex-row justify-between  mb-4'>
                    <p className=''>Tổng:</p>
                    <p className='font-bold text-xl'>{addDotsToNumber(priceMemo)}đ</p>
                </div>
                <hr className="my-8"></hr>

                <Badge>Hoàn tiền CoolCash</Badge>

            
            </div>
            
        </div>
    )
}
export default ListItemCart


