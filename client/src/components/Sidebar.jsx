import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaList, FaRegUser } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiBillLine } from "react-icons/ri";

const Sidebar = () => {

  //  links on sidebar
  const sidebar_links = [
    {
      id: 1,
      icon: <MdDashboard className='text-xl' />,
      name: 'Dashboard'
    },
    {
      id: 2,
      icon: <FaList className='text-xl' />,
      name: 'Tables'
    },
    {
      id: 3,
      icon: <RiBillLine className='text-xl' />,
      name: 'Billing'
    },
    {
      id: 4,
      icon: <FaRegUser className='text-xl' />,
      name: 'Profile'
    },
    {
      id: 5,
      icon: <GoSignIn className='text-xl' />,
      name: 'Sign In'
    },
    {
      id: 6,
      icon: <SiGnuprivacyguard className='text-xl' />,
      name: 'Sign Up'
    }
  ]

  return (
    <section
      className='fixed flex flex-col gap-10 bg-[#344767] w-[20%] h-[95%] m-5 rounded-xl shadow-2xl px-5 py-10 text-white'
    >
      <p className='w-fit border-l-2 px-2 rounded-full text-xl text-center'>
        GoodsBrite
      </p>

      <div className='flex flex-col gap-5'>
        {
          sidebar_links.map(link => (
            <div
              key={link.id}
              className='transition-all hover:bg-blue-500 hover:cursor-pointer w-full p-3 px-4 rounded-md flex items-center gap-3'
            >
              {link.icon}
              <p>{link.name}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Sidebar