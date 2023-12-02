import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollShadow } from '@nextui-org/scroll-shadow'
import { TiStar } from 'react-icons/ti'
import AddAddress from './add-address-modal'
import UpdateAddress from './update-address-modal'

function UserAdress(props) {
  const data = [
    {
      addressId: 1,
      streetLine: 'dasdasdasdasdsad, Quận 1, Hồ Chí Minh',
      name: 'Hảo 2',
      phone: '0987654321',
      isDefault: null
    },
    {
      addressId: 2,
      streetLine: 'dasdasdasdasdsad, Huyện Ba Vì, Hà Nội',
      name: 'Hảo 3',
      phone: '0987654321',
      isDefault: 1
    }
  ].sort((a, b) => (b.isDefault === 1) - (a.isDefault === 1))

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex items-center mb-10">
        <p className="text-3xl font-[600]">Địa chỉ của tôi</p>

        <AddAddress />
      </div>
      <Separator />
      <div className="flex flex-col flex-1 w-full mt-6">
        <div className="font-medium text-2xl">Sổ địa chỉ</div>
        <ScrollShadow className="w-full h-[400px] space-y-6 pt-4">
          {data.map((item) => (
            <div className="w-full" key={item.addressId}>
              <div className="w-full flex items-center">
                <h3 className="font-semibold text-base">{item.name}</h3>
                {!!item.isDefault && (
                  <div className="rounded-full border flex ml-4 items-center justify-center py-[6px] px-[10px] gap-1">
                    <TiStar className=" h-4 w-4" />
                    <span className="font-semibold text-xs">Mặc định</span>
                  </div>
                )}
                <div className="flex ml-auto gap-4">
                  <UpdateAddress
                    data={{
                      province: item.streetLine.split(', ')[2],
                      address: item.streetLine.split(', ')[0],
                      phone: item.phone,
                      username: item.name,
                      city: item.streetLine.split(', ')[1],
                      isDefault: item.isDefault
                    }}
                  />

                  <Separator orientation="vertical" className="h-auto" />
                  <span className="text-[14px] font-medium cursor-pointer text-blue-700 hover:text-black">
                    Xóa
                  </span>
                </div>
              </div>
              <div className="w-full flex items-end mt-3">
                <div className="w-full flex flex-col">
                  <div className="text-base font-medium text-zinc-600">
                    {item.phone}
                  </div>
                  <div className="text-base font-medium text-zinc-600 ">
                    {item.streetLine}
                  </div>
                </div>
                {!item.isDefault && (
                  <div className="flex ml-auto gap-4 pt-1">
                    <Button className="rounded-full py-2 px-8 text-[13px] font-semibold bg-white text-black hover:bg-black hover:text-white border border-black">
                      Đặt làm mặc định
                    </Button>
                  </div>
                )}
              </div>
              <Separator className="mt-6" />
            </div>
          ))}
        </ScrollShadow>
      </div>
    </div>
  )
}
export default UserAdress
