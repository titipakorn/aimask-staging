import { useRouter } from 'next/router'
import { MaskType } from '../../interfaces/marker'
import { MarkerIcon, TableIcon, PeopleIcon, HomeIcon} from '../stuff/Icon'
import {GridMask} from './GridMask'

type Props = {
  current: string,
  maskType: MaskType,
}

export default function Navbar({current, maskType}: Props) {
  const Router = useRouter()
  return (
    <>
      <nav className={'text-b relative flex flex-wrap items-center justify-between px-8 navbar-expand-lg '}>
        <div className={`shadow-lg fixed top-0 h-20 left-0 z-10 flex flex-wrap py-3 px-4 lg:px-6 lg:pl-8 w-screen`} style={{background: '#EF802D'}}>
          <div className="w-full relative flex items-center" >
            <button onClick={() => Router.push('/')} className="text-left text-black">
              <div className="text-4xl -mt-2">DeepCare</div>
              <span className="text-xs text-white -mt-2 block">ระบบเเสดงจำนวนผู้สวมใส่หน้ากากอนามัย</span>
            </button>
            <div className="w-1/3 pl-12 hidden lg:grid grid-cols-3 px-5 gap-2  ">
              <GridMask text_col="text-white" color="black" amount={maskType.green} criteria="95%-100%" image="m_green"  />
              <GridMask text_col="text-white" color="black" amount={maskType.yellow} criteria="90%-95%" image="m_yellow"  />
              <GridMask text_col="text-white" color="black" amount={maskType.red} criteria="ต่ำกว่า 90%" image="m_red"  />
            </div>
            <div className="flex-grow"></div>
            <div className="hidden lg:flex ">
              <span className="flex">
                <HomeIcon fill={current == 'home' ? 'black' : 'white'} />
                <button onClick={() => Router.push('/')} className={`mx-2 ${current == 'home' ? 'font-bold text-black' : 'text-gray-100'} `}>หน้าหลัก</button>
              </span>
              <span className="flex">
                <MarkerIcon fill={current == 'map' ? 'black' : 'white'} />
                <button onClick={() => Router.push('/map')} className={`mx-2 ${current == 'map' ? 'font-bold text-black' : 'text-gray-100'} `}>แผนที่</button>
              </span>
              <span className="flex ml-4">
                <TableIcon fill={current == 'report' ? 'black' : 'white'} />
                <a href="https://deepcare.aiat.or.th/streamlit/" className={`mx-2 ${current == 'brief' ? 'font-bold text-black' : 'text-gray-100'} `}>สรุปข้อมูล</a>
              </span>
              <span className="flex ml-4">
                <PeopleIcon fill={current == 'aboutus' ? 'black' : 'white'} />
                <button onClick={() => Router.push('/about-us')} className={`mx-2 ${current == 'aboutus' ? 'font-bold text-black' : 'text-gray-100'} `}>About Us</button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
