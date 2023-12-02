import { ScrollArea } from '@/components/ui/scroll-area'
import QuickLink from './quick-links'
import Catalog from './catalog'
import Sale from './sale'
import Customer from './customer'
import Promotion from './promotion'
import Banner from './banner'

const SideBar = () => {
  return (
    <ScrollArea className="h-screen w-[15rem] p-[4px] border pl-2 max-w-[200px] min-w-[200px]">
      <div className="py-4 pb-10">
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
