import React from 'react';
import {Link} from 'react-router-dom';


const AddNoted = () => {
  return (
    <div className=' md:w-[10%] max-w-[30%]'>
        <Link to='/formnoted'><button className=' block bg-green-500 p-2 rounded-lg text-white font-bold mx-auto mt-10 text-[10px] md:text-xl fixed md:left-10'>Add Noted</button></Link>
    </div>
  )
}

export default AddNoted