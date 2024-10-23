import React,{useState, useEffect} from 'react'
import Post from './post/Post'
import data from '../../assets/posts.json';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const[userDetails, setUserDetails] = useState({});

    useEffect(()=>{
        setPosts(data['posts']);
        setUserDetails(data['logged-in-user']);
    },[posts, userDetails]);


  return (
    <div className='posts w-full h-auto flex flex-col items-center gap-3 pb-10'>
        {posts.map((post, index) => (
            <Post
                key={index}
                postedBy={post.postedBy}
                postedByUrl={userDetails.profileUrl}
                postedByFollowers={userDetails.followers}
                postedOn={post.postedOn}
                postDesc={post.postDesc}
                postUrl={post.postUrl}
                postComments={post.postComments}
            />
        ))}
    </div>
  )
}

export default Posts