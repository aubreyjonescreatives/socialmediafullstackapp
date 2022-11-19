import React from 'react' 
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';


const Single = () => {

return (
<div className='single'>
<div className="content"> 

// social media post image 

    <AccountCircleIcon/>
    <div className="user">

//user image

    <img src="https://www.istockphoto.com/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-gm1328689113-412666631?phrase=sky" alt="sky"/>
    <div className="info">
    <span>John</span>
    <p>Posted 2 days ago</p>
    </div>
    <div className="edit">
        <EditIcon/>
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
