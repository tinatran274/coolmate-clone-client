import React, {useState} from 'react';
import { ArrowRightOutlined} from '@ant-design/icons';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { UserOutlined, CalendarFilled, PhoneFilled, LockFilled, EyeInvisibleFilled, EyeFilled, CloseCircleFilled} from '@ant-design/icons';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"

function Info (props) {

    const userData = {
        name: "TRẦN NHUNG",
        email: "21522438@gm.uit.edu.vn",
        password: "123456"
    }
    const listDay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    const listMonth = [1,2,3,4,5,6,7,8,9,10,11,12];
    const listYear = [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006];
    const [name, setName] = useState(userData.name);
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2023);
    const [gender, setGender] = useState("male");
    const [phone, setPhone] = useState(userData.phone);
    const [height, setHeight] = useState(userData.height ? userData.height : 150);
    const [weight, setWeight] = useState(userData.weight ? userData.weight : 50);
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [txtError, setTxtError] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);


    const handleSetDay = (value) => {
        setDay(value)
    }
    const handleSetMonth = (value) => {
        setMonth(value)
    }
    const handleSetYear = (value) => {
        setYear(value)
    }
    const handleGenderChange = (value) => {
        setGender(value)
    }

    const handleUpdateInfo = () => {
        console.log(name, day, month, year, gender, height, weight)
    }
    const handleEncodePassword = (password) => {
        const maskedPassword = '*'.repeat(password.length);
        return maskedPassword
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const checkPassword = () => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(newPassword);
        const hasLowerCase = /[a-z]/.test(newPassword);
        const hasDigit = /\d/.test(newPassword);
    
        if (newPassword.length >= minLength && hasUpperCase && hasLowerCase && hasDigit) {
          return 'Strong';
        } else if (newPassword.length >= minLength && (hasUpperCase || hasLowerCase || hasDigit)) {
          return 'Moderate';
        } else {
          return 'Weak';
        }
    }
    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    const handleUpdateAccount = () => {
        console.log(checkPassword())
        if(!password || !newPassword || !confirmNewPassword){
            setTxtError("Bạn chưa điền đủ thông tin")
        }
        else if(password !== userData.password){
            setTxtError("Bạn nhập sai mật khẩu")
        }
        else if (newPassword !== confirmNewPassword){
            setTxtError("Xác nhận lại mật khẩu")
        } else if (checkPassword() === 'Weak'){
            setTxtError("Mật khẩu yếu")
        }
        else {
            closeDialog() 
        }
    }
    

    return (
        <div className="">
            <p className='text-3xl mb-5'>Thông tin tài khoản</p>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Họ và tên</p>
                {userData.name ? <p className=''>{userData.name}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Số điện thoại</p>
                {userData.age ? <p className=''>{userData.age}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Giới tính</p>
                {userData.age ? <p className=''>{userData.gender}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Ngày sinh
                    <span className='italic text-sm'> (ngày/tháng/năm)</span>
                </p>
                {userData.age ? <p className=''>{userData.dob}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Chiều cao</p>
                {userData.age ? <p className=''>{userData.height}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Cân nặng</p>
                {userData.age ? <p className=''>{userData.weight}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
           
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <div className='bg-white border-[1px] border-black hover:bg-gray-200 cursor-pointer hover:border-gray-200 px-8 py-3 rounded-full inline-block mt-4'>
                        <span className='font-bold'>CẬP NHẬT</span>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className='text-3xl mb-6' >Chỉnh sửa thông tin tài khoản</AlertDialogTitle>
                    <div className="h-[100%] w-[100%] p-4">
                        <div className="flex flex-row items-center border-[1px] border-gray-300 rounded-full px-4 py-1">
                            <UserOutlined className="text-gray-300 text-xl mr-3"/>
                            <div className='w-[100%]'>
                                <p className=' text-gray-500 text-xs mb-1'>Họ tên của bạn</p>
                                <input className=' text-black w-[100%] border-none outline-none' value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4 justify-between">
                            <Select onValueChange={handleSetDay}> 
                                <SelectTrigger className="w-[140px] rounded-full px-4">
                                    <CalendarFilled className="text-gray-300 text-xl mr-3"/>
                                    <SelectValue placeholder="Ngày"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <ScrollArea className="h-40 w-30">
                                        <SelectGroup>{listDay.map((item, index) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>))}
                                        </SelectGroup>
                                    </ScrollArea>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={handleSetMonth}> 
                                <SelectTrigger className="w-[140px] rounded-full px-4">
                                    <CalendarFilled className="text-gray-300 text-xl mr-3"/>
                                    <SelectValue placeholder="Tháng"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <ScrollArea className="h-40 w-30">
                                        <SelectGroup>{listMonth.map((item, index) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>))}
                                        </SelectGroup>
                                    </ScrollArea>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={handleSetYear}> 
                                <SelectTrigger className="w-[140px] rounded-full px-4">
                                    <CalendarFilled className="text-gray-300 text-xl mr-3"/>
                                    <SelectValue placeholder="Năm"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <ScrollArea className="h-40 w-30">
                                        <SelectGroup>{listYear.map((item, index) => (
                                            <SelectItem key={item} value={item}>{item}</SelectItem>))}
                                        </SelectGroup>
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                        </div>
                        <RadioGroup className="flex flex-row my-4 gap-6" defaultValue="male" onValueChange={handleGenderChange}>
                            <div className="flex items-center space-x-1">
                                <RadioGroupItem className={gender==="male" ? "border-blue-600 text-blue-600" : ""} value="male" id="male" />
                                <Label htmlFor="male">Nam</Label>
                            </div>
                            <div className="flex items-center space-x-1">
                                <RadioGroupItem className={gender==="female" ? "border-blue-600 text-blue-600" : ""} value="female" id="female" />
                                <Label htmlFor="female">Nữ</Label>
                            </div>
                            <div className="flex items-center space-x-1">
                                <RadioGroupItem className={gender==="another" ? "border-blue-600 text-blue-600" : ""} value="another" id="another" />
                                <Label htmlFor="another">Khác</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex flex-row items-center border-[1px] border-gray-300 rounded-full px-4 py-1">
                            <PhoneFilled className="text-gray-300 text-xl mr-3"/>
                            <div className='w-[100%]'>
                                <p className=' text-gray-500 text-xs mb-1'>Số điện thoại</p>
                                <input className=' text-black w-[100%] border-none outline-none' type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between my-6">
                            <p className='text-gray-500 text-sm'>Chiều cao</p>
                            <Slider className="w-[70%]" defaultValue={[height]} min={140} max={190} step={1} onValueChange={(e) => setHeight(e)}/>
                            <p className='font-bold text-nm text-blue-600'>{height}cm</p>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-6">
                            <p className='text-gray-500 text-sm'>Cân nặng</p>
                            <Slider className="w-[70%]" defaultValue={[weight]} min={40} max={90} step={1} onValueChange={(e) => setWeight(e)}/>
                            <p className='font-bold text-nm text-blue-600'>{weight}kg</p>
                        </div>
                    </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Hủy bỏ</AlertDialogCancel>
                    <AlertDialogAction onClick={handleUpdateInfo}>Cập nhật</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <p className='text-3xl mb-5 mt-16'>Thông tin đăng nhập</p>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Email</p>
                {userData.email ? <p className=''>{userData.email}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <div className="flex flex-row mb-4 items-center">
                <p className='w-[40%] text-gray-500 text-lg'>Mật khẩu</p>
                {userData.password ? <p className=''>{handleEncodePassword(userData.password)}</p> : 
                    <p className='italic text-gray-500 text-sm'>Chưa cập nhật </p>
                }
            </div>
            <AlertDialog open={dialogOpen} onDismiss={closeDialog}>
                <AlertDialogTrigger asChild>
                    <div className='bg-white border-[1px] border-black hover:bg-gray-200 cursor-pointer hover:border-gray-200 px-8 py-3 rounded-full inline-block mt-4'
                        onClick={openDialog}>
                        <span className='font-bold'>CẬP NHẬT</span>
                    </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className='text-3xl mb-6' >Chỉnh sửa thông tin tài khoản</AlertDialogTitle>
                    <div className="h-[100%] w-[100%] p-4">
                        <div className="flex flex-row items-center border-[1px] border-gray-300 rounded-full px-4 py-1 mb-4">
                            <LockFilled className="text-gray-300 text-xl mr-3"/>
                            <div className='w-[100%]'>
                                <p className=' text-gray-500 text-xs mb-1'>Mật khẩu cũ</p>
                                <input className=' text-black w-[100%] border-none outline-none' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            {showPassword ? <EyeInvisibleFilled className="text-gray-300 text-xl mr-3" onClick={togglePasswordVisibility}/> : 
                            <EyeFilled className="text-gray-300 text-xl mr-3" onClick={togglePasswordVisibility}/>}
                        </div>
                        <div className="flex flex-row items-center border-[1px] border-gray-300 rounded-full px-4 py-1 mb-4">
                            <LockFilled className="text-gray-300 text-xl mr-3"/>
                            <div className='w-[100%]'>
                                <p className=' text-gray-500 text-xs mb-1'>Mật khẩu mới</p>
                                <input className=' text-black w-[100%] border-none outline-none' type={showPassword ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            </div>
                            {showPassword ? <EyeInvisibleFilled className="text-gray-300 text-xl mr-3" onClick={togglePasswordVisibility}/> : 
                            <EyeFilled className="text-gray-300 text-xl mr-3" onClick={togglePasswordVisibility}/>}
                        </div>
                        <div className="flex flex-row items-center border-[1px] border-gray-300 rounded-full px-4 py-1 mb-2">
                            <LockFilled className="text-gray-300 text-xl mr-3"/>
                            <div className='w-[100%]'>
                                <p className=' text-gray-500 text-xs mb-1'>Nhập lại mật khẩu mới</p>
                                <input className=' text-black w-[100%] border-none outline-none' type={showPassword ? 'text' : 'password'} value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>
                            </div>
                            {showPassword ? <EyeInvisibleFilled className="text-gray-300 text-xl mr-3" onClick={togglePasswordVisibility}/> : 
                            <EyeFilled className="text-gray-300 text-xl mr-3" onClick={togglePasswordVisibility}/>}
                        </div>

                        <span className="text-sm text-red-500">{txtError}</span>

                    </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={closeDialog}>Hủy bỏ</AlertDialogCancel>
                        <Button onClick={handleUpdateAccount}>Cập nhật</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
export default Info;