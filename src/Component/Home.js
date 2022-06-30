import React from 'react';
import AddNoted from './AddNoted';
import ShowNoted from './ShowNoted';

const Home  = () => {
  return (
    <div className=' flex'>
        <AddNoted/>
        <ShowNoted/>
    </div>
  )
}

export default Home