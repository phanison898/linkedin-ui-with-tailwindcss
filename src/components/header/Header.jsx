import React from 'react'
import {LOGO_URL} from '../../constants/Constants';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsOutageOutlinedIcon from '@mui/icons-material/AppsOutageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = () => {
  return (
    <div className='sticky top-0 header w-full h-auto flex items-center gap-2 px-48 py-2 shadow-sm bg-white'>
        <div className="header__logo w-auto h-auto flex justify-center items-center">
            <img className='logo aspect-square w-10 h-10 rounded-md' src={LOGO_URL} alt="logo" />
        </div>
        <div className="header__search_box w-60 h-full flex justify-center items-center gap-2 p-2 bg-blue-50 rounded-md shadow-sm">
            <SearchOutlinedIcon />
            <input className='flex-1 h-full flex items-center bg-transparent outline-none' type="text" placeholder='Search any user'/>
        </div>
        <div className="header__nav flex-1 h-full flex justify-evenly items-center [&>*]:cursor-pointer">
            <HomeOutlinedIcon />
            <WorkOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <AppsOutageOutlinedIcon />
            <DarkModeOutlinedIcon />
        </div>
    </div>
  )
}

export default Header