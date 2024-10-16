import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {EMOTE_ICONS_URL} from '../../../constants/Constants';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const Post = ({postedBy, postedByUrl, postedByFollowers, postedOn, postDesc, postUrl, postComments}) => {

    const capitalise = () => (postedBy.charAt(0).toUpperCase() + postedBy.slice(1));

    return (
    <div className='post w-full h-auto flex flex-col items-center bg-white shadow-md rounded-sm'>
        <div className="post__header w-full h-auto flex items-center gap-2 p-2">
            <img className='aspect-square h-10 rounded-full' src={postedByUrl} alt="profile" />
            <div className="header__details flex flex-col items-start">
                <p className="details__main font-semibold text-sm cursor-pointer">{capitalise()}</p>
                <p className="details__followers font-light text-gray-500 text-xs">{postedByFollowers} followers</p>
                <p className="details__time font-light text-gray-500 text-xs">{postedOn}</p>
            </div>
            <div className="header__icons flex-1 h-full flex justify-end items-start gap-1">
                <MoreHorizOutlinedIcon className='hover:bg-gray-200 rounded-full cursor-pointer' />
                <CloseOutlinedIcon  className='hover:bg-gray-200 rounded-full cursor-pointer' />
            </div>
        </div>
        <div className="post__desc w-full h-auto flex items-center p-2 text-sm">{postDesc}</div>
        <div className="post__media w-full h-96 flex justify-center items-center">
            <img className='w-full h-full' src={postUrl} alt="post" />
        </div>
        <div className="post__stats w-full h-auto flex items-center gap-1 p-2 border-b-2">
            <div className="stats__emote_icons w-auto h-auto flex items-center">
                {EMOTE_ICONS_URL.map((url,index) => (
                    <img className='aspect-square w-4 h-4 rounded-full' src={url} alt="emote icon" key={index} />
                ))}
            </div>
            <div className="stats__comments flex-1 h-auto flex justify-end items-center">
                <p className='font-light text-gray-500 text-sm cursor-pointer hover:text-black'>{postComments} comments</p>
            </div>
        </div>
        <div className="post__reactions w-full h-auto flex justify-evenly items-center p-2 gap-2 [&>*]:cursor-pointer">
            <div className="reactions flex-1 h-auto flex justify-center items-center gap-2 px-3 py-2 hover:bg-gray-300 rounded-md">
                <ThumbUpAltOutlinedIcon />
                <p className='text-sm font-thin text-gray-800'>Like</p>
            </div>
            <div className="reactions flex-1 h-auto flex justify-center items-center gap-2 px-3 py-2 hover:bg-gray-300 rounded-md">
                <InsertCommentOutlinedIcon />
                <p className='text-sm font-thin text-gray-800'>Comment</p>
            </div>
            <div className="reactions flex-1 h-auto flex justify-center items-center gap-2 px-3 py-2 hover:bg-gray-300 rounded-md">
                <ReplyOutlinedIcon />
                <p className='text-sm font-thin text-gray-800'>Share</p>
            </div>
            <div className="reactions flex-1 h-auto flex justify-center items-center gap-2 px-3 py-2 hover:bg-gray-300 rounded-md">
                <DownloadOutlinedIcon />
                <p className='text-sm font-thin text-gray-800'>Download</p>
            </div>
        </div>
    </div>
  )
}

export default Post