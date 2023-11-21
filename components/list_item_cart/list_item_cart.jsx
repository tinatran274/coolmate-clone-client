'use client'

import React, {useState, useEffect, useMemo} from 'react'
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
import {notification, Space } from 'antd';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ListItemCart = () => {

    const templistItemCart = [{
        name: "Shorts 84RISING Jurassic Warriors",
        price: "850000",
        num: 5,
        colorChose: "Đen",
        listColor: [
            {
              color_name: 'Xám nhạt',
              imgs: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/October2023/ji3Untitled-1_45.jpg',
            },
            {
              color_name: 'Đen',
              imgs:'https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/October2023/jr2Untitled-1_62.jpg',
            }
          ],
        sizeChose: "M" ,
        listSize: ['M', 'L', 'XL', '2XL', '3XL'],
        }, {
        name: "T-Shirt Cotton 220GSM",
        price: "269000",
        num: 1,
        colorChose: "Trắng",
        listColor: [
            {
              color_name: 'Xanh rêu',
              imgs: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/August2023/APL100-258-6.jpg',
            },
            {
              color_name: 'Trắng',
              imgs: [
                'https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/August2023/APL100-EDIT-28.jpg',
              ]
            },
            {
                color_name: 'Đen',
                imgs: [
                  'https://media.coolmate.me/cdn-cgi/image/quality=100/uploads/August2023/APL100-258-8.jpg',
                ]
              }
          ],
        sizeChose: "XL",
        listSize: ['M', 'L', 'XL', '2XL', '3XL'],
        }
    ]

    const responseGetCart = [
        {
          "productItemId": 4,
          "productId": 1,
          "name": "Polo Ice Cooling",
          "price": 349000,
          "color": "Xanh Navy",
          "size": "M",
          "img": "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.2_68_70.jpg",
          "qty": 10,
          "allItemsOfProduct": [
            {
              "productItemId": 4,
              "size": "M",
              "color": "Xanh Navy"
            },
            {
              "productItemId": 1,
              "size": "M",
              "color": "Đen"
            },
            {
              "productItemId": 2,
              "size": "L",
              "color": "Đen"
            },
            {
              "productItemId": 3,
              "size": "XL",
              "color": "Đen"
            },
            {
              "productItemId": 5,
              "size": "L",
              "color": "Xanh Navy"
            },
            {
              "productItemId": 6,
              "size": "XL",
              "color": "Xanh Navy"
            }
          ]
        },
        {
          "productItemId": 3,
          "productId": 1,
          "name": "Polo Ice Cooling",
          "price": 349000,
          "color": "Đen",
          "size": "XL",
          "img": "https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/image/November2023/23CMCW.PL001.2_68_70.jpg",
          "qty": 2,
          "allItemsOfProduct": [
            {
              "productItemId": 4,
              "size": "M",
              "color": "Xanh Navy"
            },
            {
              "productItemId": 1,
              "size": "M",
              "color": "Đen"
            },
            {
              "productItemId": 2,
              "size": "L",
              "color": "Đen"
            },
            {
              "productItemId": 3,
              "size": "XL",
              "color": "Đen"
            },
            {
              "productItemId": 5,
              "size": "L",
              "color": "Xanh Navy"
            },
            {
              "productItemId": 6,
              "size": "XL",
              "color": "Xanh Navy"
            }
          ]
        }
      ]

    const [data, setData] = useState(null);
    const router = useRouter();
    const [listProvince, setListProvince] = useState(Object.entries(TinhTP).map(([key, value]) => ({ name: value.name, code: value.code })));
    const [listCity, setListCity] = useState([]);
    const [listDistrict, setListDistrict] = useState([]);
    const [province, setProvince] = useState({});
    const [city, setCity] = useState({});
    const [district, setDistrict] = useState({});
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [note, setNote] = useState("");
    const [optionPay, setOptionPay] = useState("Momo");
    const [listProduct, setListProduct] = useState(templistItemCart);

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type, content) => {
    api[type]({
      message: 'Lỗi',
      description: content,
    });
    }

    const handleGetCart = () => {
        try {
            const options = {
                method: 'GET',
                url: 'https://localhost:7107/api/cart',
            }   
            axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
            // responseData(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        handleGetCart();
    }, []);

    const handleSetProvince = (value) => {
        for (const code in TinhTP) {
            if (TinhTP[code].name === value) {
                const temp = { name: value, code: TinhTP[code].code }
                setProvince(temp)
                const filterCity = Object.keys(QuanHuyen)
                    .filter(key => QuanHuyen[key].parent_code === TinhTP[code].code)
                    .map(key => ({name: QuanHuyen[key].name_with_type, code: key}));
                setListCity(filterCity)
                setListDistrict([])
                setCity({})
                setDistrict({})
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
                setDistrict({})
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
    const handleSizeChange = (name, size) => {
        const newArray1 = listProduct.map(item => {
            if (item.name === name) {
            return { ...item, sizeChose: size};
            }
            return item;
        });
        setListProduct(newArray1)
    }
    const handleColorChange = (name, color, img) => {
        const newArray1 = listProduct.map(item => {
            if (item.name === name) {
            return { ...item, colorChose: color, img: img};
            }
            return item;
        });
        setListProduct(newArray1)
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
            if ((length - i - 1) % 3 === 0 && i !== length - 1)
                result += ".";
            }
            return result;
        }
    }
    const isValidPhoneNumber = () => {
        const phoneRegex = /^\d{10}$/;
            return phoneRegex.test(phone);
    }
    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    const handlePayment = () => {
        if (!username || !phone || !email || !adress || !province.name || !city.name || !district.name )
            openNotificationWithIcon('error', "Bạn chưa điền đủ thông tin")
        else if (!isValidPhoneNumber())
            openNotificationWithIcon('error', "Số điện thoại không hợp lệ")
        else if (!isValidEmail())
            openNotificationWithIcon('error', "Email không hợp lệ")
        else {
            router.push(`/checkout/${encodeURIComponent(JSON.stringify({
                username: username,
                phone: phone,
                email: email,
                adress: adress,
                province: province.name,
                city: city.name,
                district: district.name,
                note: note,
                optionPay: optionPay,
                listProduct: listProduct
            }))}`)
        }

    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleAdressChange = (e) => {
        setAdress(e.target.value);
    }
    const handleNoteChange = (e) => {
        setNote(e.target.value);
    }

    return(
        <div className='p-4 flex flex-row mb-12'>
             {contextHolder}
            <div className='w-[60%]'>
                <div className='bg-gray-100 px-4 py-6 rounded-md mt-4'>
                    <p className='uppercase font-bold text-4xl'>Hi, Trần Nhung</p>
                    <p>Tổng đơn (3 sản phẩm) <span className='text-blue-600 font-bold'>{addDotsToNumber(priceMemo)}đ</span></p>
                </div>
                <p className='font-bold text-3xl px-4 mt-12 mb-8'>Thông tin vận chuyển</p>
                <div className='px-4 flex flex-row gap-4 mb-5'>
                    <Input className="rounded-full px-4" type="text" placeholder="Họ tên" value={username} onChange={handleUsernameChange}/>
                    <Input className="rounded-full px-4" type="text" placeholder="Số điện thoại"  value={phone} onChange={handlePhoneChange}/>
                </div>
                <div className='px-4'>
                    <Input className="rounded-full px-4 mb-5" type="text" placeholder="Email" value={email} onChange={handleEmailChange}/>
                    <Input className="rounded-full px-4 mb-5" type="text" placeholder="Địa chỉ" value={adress} onChange={handleAdressChange}/>
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
                    <Input className="rounded-full px-4 mb-5" type="text" placeholder="Ghi chú thêm"  value={note} onChange={handleNoteChange}/>
                </div>
                <div className="flex items-center space-x-2 px-4">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Lưu vào sổ địa chỉ để dùng cho lần mua hàng tiếp theo
                    </label>
                </div>
                <p className='font-bold text-3xl px-4 mt-12 mb-6'>Hình thức thanh toán</p>
                <RadioGroup  className='px-4' defaultValue={optionPay} onValueChange={handlePay}>
                    <div className= {optionPay=="Momo" ?
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" :
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="Momo" id="Momo" />
                        <label htmlFor='Momo' className='h-[10%] w-full absolute cursor-pointer'/>
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/momo-icon.png" alt="icon"/>
                        <p className=''>Thanh toán Momo</p>
                    </div>
                    <div className= {optionPay=="COD" ?
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" :
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="COD" id="COD" />
                        <label htmlFor='COD' className='h-[10%] w-full absolute cursor-pointer'/>
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/COD.svg" alt="icon"/>
                        <p className=''>Thanh toán khi nhận hàng</p>
                    </div>
                    <div className= {optionPay=="ZaloPay" ?
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" :
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="ZaloPay" id="ZaloPay" />
                        <label htmlFor='ZaloPay' className='h-[10%] w-full absolute cursor-pointer'/>
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/logo-zalopay.svg" alt="icon"/>
                        <p className=''>Ví điện tử ZaloPay</p>
                    </div>
                    <div className= {optionPay=="VNPay" ?
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" :
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="VNPay" id="VNPay" />
                        <label htmlFor='VNPay' className='h-[10%] w-full absolute cursor-pointer'/>
                        <img className='w-8 object-contain mr-4' src="https://www.coolmate.me/images/vnpay.png" alt="icon"/>
                        <p className=''>Thẻ ATM/Thẻ tín dụng (Credit card)/Thẻ ghi nợ (Debit card)</p>
                    </div>
                    <div className= {optionPay=="Flex Money" ?
                    "flex items-center space-x-2 px-6 py-5 border border-blue-500 rounded-xl gap-8 mb-2 hover:border-blue-500" :
                    "flex items-center space-x-2 px-6 py-5 border rounded-xl gap-8 mb-2 hover:border-blue-500 opacity-50"}>
                        <RadioGroupItem value="Flex Money" id="Flex Money" />
                        <label htmlFor='Flex Money' className='h-[10%] w-full absolute cursor-pointer'/>
                        <img className='w-8 object-contain mr-4' src="https://sandbox.flexmoney.vn/static/media/logo-login.cd69de6e7b8ff1cc0e4d74762ee7d40b.svg" alt="icon"/>
                        <p className=''>Chuyển khoản liên ngân hàng bằng QR Code</p>
                    </div>
                </RadioGroup>
                <p className='px-4 mb-8'>Nếu bạn không hài lòng với sản phẩm của chúng tôi? Bạn hoàn toàn có thể trả lại sản phẩm. Tìm hiểu thêm
                <span className='font-bold'> tại đây</span>.</p>
                <div className='px-4' >
                    <Button className='rounded-lg p-6 w-[100%] hover:bg-gray-200 hover:text-black' onClick={handlePayment}>Thanh toán {addDotsToNumber(priceMemo)}đ ({optionPay})</Button>
                </div>

            </div>
            <div className="h-auto border mx-3 border-gray-200"></div>
            <div className='w-[38%]'>
                <p className='font-bold text-3xl px-3 mt-8 mb-8'>Giỏ hàng</p>
                <div className='px-3'>
                    {listProduct && listProduct.map((product, index) => {
                    return (
                    <CardItemCart listItems={listProduct} onNumChange={handleNumChange} onSizeChange={handleSizeChange}
                        onColorChange={handleColorChange}
                        key={index}
                        name={product.name}
                        price={addDotsToNumber(product.price)}
                        num={product.num}
                        sizeChose={product.sizeChose}
                        colorChose={product.colorChose}
                        listColor={product.listColor}
                        listSize={product.listSize}
                        />
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
