import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNoted, notedSelectors, deleteNoted } from '../features/NotedSlice';
import { Link } from 'react-router-dom';

const ShowNoted = () => {

  const dispatch = useDispatch();
  const data = useSelector(notedSelectors.selectAll)

  useEffect(() => {
    dispatch(getNoted());
  }, [])

  return (
    <div className=' w-[70%] flex-1 ml-20 border-l border-gray-300'>
      <h1 className=' text-gray-400 text-sm text-center mt-5'>Your Note In Here</h1>
      {
        data.map((item) => {
          return (
            <div className=' shadow-lg px-9 mb-20 p-5' key={item.id}>
              <h1 className=' font-bold text-sm md:text-lg uppercase'>{item.id}. {item.title}</h1>
              <p className=' pl-2 text-sm'>{item.note}</p>
              <div className=' mt-10'>
                <Link to={`/editnoted/${item.id}`}><button className=' bg-blue-600 px-5 rounded-xl text-white text-sm mr-3'>Edit</button></Link>
                <button onClick={() => dispatch(deleteNoted(item.id))} className=' bg-red-500 px-3 rounded-xl text-white text-sm'>Hapus</button>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default ShowNoted