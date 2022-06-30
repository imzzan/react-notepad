import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { saveNoted } from '../features/NotedSlice';
import {useNavigate} from 'react-router-dom'

const FormNoted = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNote = async (e) => {
    e.preventDefault();
    await dispatch(saveNoted({title, note}));
    navigate('/')

    setTitle('');
    setNote('')
  }


  return (
    <div className=' flex h-screen items-center justify-center'>
      <form onSubmit={createNote} className='mx-auto'>
        <div className=' mb-5'>
          <label htmlFor="judul" className=' mr-5 font-bold'>Title :</label>
          <input type="text" name="judul" id="judul" placeholder='Title.....' value={title} onChange={(e) => setTitle(e.target.value)} className=' border border-gray-500 border-none outline-none font-bold uppercase text-sm' />
        </div>
        <div>
          <textarea cols="40" rows="10" placeholder='Write Your Note in here....' value={note} onChange={(e) => setNote(e.target.value)} className=' lg:w-[800px] outline-none text-gray-500 '></textarea>
        </div>
        <button className=' bg-green-500 px-3 text-white rounded-md md:w-[100px]'>Save</button>
      </form>
    </div>
  )
}

export default FormNoted