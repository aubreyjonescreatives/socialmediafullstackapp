import React from 'react' 
import { Link } from 'react-router-dom'


const HomePage = () => {


const posts = [
{
id: 1, 
title: 'Lorem ipsum dolor sit amet consectetur', 
desc: 'Lorem ipsum dolor sit amet consectetur', 
img: '',


}, 
{
    id: 2, 
    title: 'Lorem ipsum dolor sit amet consectetur', 
    desc: 'Lorem ipsum dolor sit amet consectetur', 
    img: '',
    
    
    }, 
    {
        id: 3, 
        title: 'Lorem ipsum dolor sit amet consectetur', 
        desc: 'Lorem ipsum dolor sit amet consectetur', 
        img: '',
        
        
        }, 
        {
            id: 4, 
            title: 'Lorem ipsum dolor sit amet consectetur', 
            desc: 'Lorem ipsum dolor sit amet consectetur', 
            img: '',
            
            
            }, 
            {
                id: 5, 
                title: 'Lorem ipsum dolor sit amet consectetur', 
                desc: 'Lorem ipsum dolor sit amet consectetur', 
                img: '',
                
                
                }, 






]




    return (

<div className='home'>
<div className="posts">
{posts.map(post=>(
<div className="post" key={post.id}>
    <div className="img">
    <img src={post.img} alt=""/>
    </div>
    <div className="content">
        <Link to={`/post/${post.id}`}>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        </Link>
    </div>
</div>
))}

</div>
</div>
)



}

export default HomePage; 
