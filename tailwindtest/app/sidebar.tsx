
import { UilSchedule, UilInfoCircle } from '@iconscout/react-unicons'
import Image from 'next/image'
export default function Sidebar() {
  return (
    <div className="bg-slate-100 divide-y divide-gray-400 h-screen flex flex-col" >
      {/* Title */}
      <div className='p-5'>
        <h1 className="text-fuchsia-900 font-bold text-3xl">East <br/> Sweden <br/> MedTech</h1>
        <div className="bg-fuchsia-900 h-1 w-5/6 content-center"></div>
      </div>
      {/* Clicky buttons */}
      <div className='p-5'>
        <h2 className="text-gray-800">Menu</h2>
        <ul>
          <button className="text-gray-500 font-bold text-2xl flex"> <UilSchedule  color="#6b7280" /> Meetings</button>
          <button className="text-gray-500 font-bold text-2xl flex"> <UilSchedule  color="#6b7280" /> Document</button>
          <button className="text-gray-500 font-bold text-2xl flex"> <UilSchedule  color="#6b7280" /> Templates</button>
        </ul>
      </div>
      <div className='bg-fuchsia-900 flex flex-grow'>
      </div>

      {/* Actionbar */}
      <div >
        <button className="text-gray-500 flex w-full"> <UilInfoCircle  color="#6b7280" /> Info</button>
      </div>
      <div className='flex'>
        <Image src="/logo.png" alt="East Sweden MedTech" width={100} height={100} />
        <div>
          <p className='text-gray-500'>East Sweden MedTech</p>
          <p className='text-gray-500'>© 2024</p>
        </div>
      </div>
    </div>
  );
}
