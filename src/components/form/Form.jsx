import React, {useState, useEffect} from 'react'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import data from '../../assets/posts.json';

const Form = () => {

    const[profileUrl, setProfileUrl] = useState("");

    useEffect(()=>{
        setProfileUrl(profileUrl => data['logged-in-user'].profileUrl);
    },[])

  return (
    <div className='form w-full h-auto flex flex-col items-center gap-2 p-1 sm:p-2 md:p-2 rounded-sm sm:rounded-md md:rounded-md bg-white'>
        <div className="form__top w-full h-auto flex items-center">
            <img className='w-9 h-9 flex justify-center items-center rounded-full mr-2' src={profileUrl} alt="" />
            <input className='flex-1 justify-center items-center text-black font-normal px-5 py-2 rounded-s-full outline-none shadow-md' type="text" placeholder="Type what's on your mind"/>
            <p className='flex justify-center items-center text-white bg-blue-500 font-semibold p-2 rounded-e-full cursor-pointer'>Post</p>
        </div>
        <div className="form__bottom w-full h-8 flex justify-evenly items-center">
            <div className='w-auto h-full flex items-center gap-1 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-100'>
                <ImageOutlinedIcon color="primary" />
                <p>Image</p>
            </div>
            <div className='w-auto h-full flex items-center gap-1 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-100'>
                <SlowMotionVideoOutlinedIcon color="secondary" />
                <p>Video</p>
            </div>
            <div className='w-auto h-full flex items-center gap-1 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-100'>
                <ArticleOutlinedIcon color="success" />
                <p>Article</p>
            </div>
        </div>
    </div>
  )
}

export default Form