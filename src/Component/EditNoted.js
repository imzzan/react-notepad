import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoted, notedSelectors, updateNoted } from '../features/NotedSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditNoted = () => {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();

  const data = useSelector((state) => notedSelectors.selectById(state, id));


  useEffect(() => {
    dispatch(getNoted())
  }, []);

  useEffect(() => {
    if(data) {
      setTitle(data.title);
      setNote(data.note)
    }
  }, data);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateNoted({id, title, note}));
    navigate('/')

  }

  return (
    <div className=' flex h-screen items-center justify-center'>
      <form onSubmit={handleUpdate} className='mx-auto'>
        <div className=' mb-5'> 
          <label htmlFor="judul" className=' mr-5 font-bold'>Title :</label>
          <input type="text" name="judul" id="judul" placeholder='Title.....' value={title} onChange={(e) => setTitle(e.target.value)} className=' border border-gray-500 border-none outline-none font-bold uppercase text-sm' />
        </div>
        <div>
          <textarea name="noted" id="noted" cols="40" rows="10" placeholder='Write Your Note in here....' value={note} onChange={(e) => setNote(e.target.value)} className=' lg:w-[800px] outline-none text-gray-500 '></textarea>
        </div>
        <button className=' bg-green-500 px-3 text-white rounded-md md:w-[100px]'>Edit</button>
      </form>
    </div>
  )
}

export default EditNoted