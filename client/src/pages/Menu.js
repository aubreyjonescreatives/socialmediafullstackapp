import React from 'react' 
import { Link } from 'react-router-dom'


const Menu = () => {



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
<>

<div>Menu</div>
<h1>Other posts you may like</h1>
{posts.map(post=>(
    <div className="post" key={post.id}>
    <img src={post.img} alt="" />
    <h2>{post.title}</h2>
    <button>Read More</button>
    </div>
))}

</>
)



}

export default Menu; 
