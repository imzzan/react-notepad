import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditNoted from './Component/EditNoted';
import FormNoted from './Component/FormNoted';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/formnoted' element={<FormNoted/>}/>
          <Route path='/editnoted/:id' element={<EditNoted/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
