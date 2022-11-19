import React from 'react' 
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'

const Single = () => {

return (
<div className='single'>
<div className="content"> 

// social media post image 

<img src="https://www.istockphoto.com/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-gm1328689113-412666631?phrase=sky" alt="sky"/>
   
    <div className="user">

//user image
  <AccountCircleIcon/>
    <div className="info">
    <span>John</span>
    <p>Posted 2 days ago</p>
    </div>
    <div className="edit">
        <Link to={`/write?edit=2`}> <EditIcon/></Link>
       
        <DeleteIcon/>
    </div>
    </div>
</div>
<div className="menu">m
</div>


</div>

)



}

export default Single; 
