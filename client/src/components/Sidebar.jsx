import React, { useContext } from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaList, FaRegUser } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiBillLine } from "react-icons/ri";
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const { sideBar } = useContext(DataContext)

  //  links on sidebar
  const sidebar_links = [
    {
      id: 1,
      icon: <MdDashboard className='text-xl' />,
      name: 'Dashboard',
      link: '/'
    },
    {
      id: 2,
      icon: <FaList className='text-xl' />,
      name: 'Manage Products',
      link: '/manage'
    },
    {
      id: 3,
      icon: <RiBillLine className='text-xl' />,
      name: 'Billing',
      link: ''
    },
    {
      id: 4,
      icon: <FaRegUser className='text-xl' />,
      name: 'Profile',
      link: '/profile'
    },
    {
      id: 5,
      icon: <GoSignIn className='text-xl' />,
      name: 'Sign In',
      link: '/sign-in'
    },
    {
      id: 6,
      icon: <SiGnuprivacyguard className='text-xl' />,
      name: 'Sign Up',
      link: '/sign-up'
    }
  ]

  return (
    <section
      className={`${sideBar ? 'left-0' : '-left-96 md:left-0'} fixed md:flex flex-col gap-10 bg-[#344767] z-10 w-[70%] md:w-[30%] lg:w-[20%] h-full md:h-[95%] md:m-5 md:rounded-xl shadow-2xl px-5 py-10 text-white transition-all border border-cyan-500`}
    >
      <p className='w-fit border-l-2 px-2 rounded-full text-xl text-center'>
        GoodsBrite
      </p>

      <div className='flex flex-col gap-5 mt-7 md:mt-0'>
        {
          sidebar_links.map(link => (
            <Link
              to={link.link}
              key={link.id}
              className='transition-all hover:bg-cyan-500 hover:cursor-pointer w-full p-3 px-4 rounded-md flex items-center gap-3'
            >
              {link.icon}
              <p>{link.name}</p>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Sidebar
