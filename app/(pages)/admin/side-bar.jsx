import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import QuickLink from './quick-links'
import Catalog from './catalog'
import Sale from './sale'
import Customer from './customer'
import Promotion from './promotion'
import Banner from './banner'

const SideBar = () => {
  return (
    <ScrollArea className="h-full w-[15rem] p-[4px] border pl-2">
      <div className="py-4">
        <QuickLink />
        <Catalog />
        <Sale />
        <Customer />
        <Promotion />
        <Banner />
      </div>
    </ScrollArea>
  )
}

export default SideBar
