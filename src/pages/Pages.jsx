import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SingleTodo from './SingleTodo';
import EditTodo from './EditTodo';
// import NotFound from '../components/NotFound';

const Pages = () => {
  return (
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todo/:id" element={<SingleTodo/>}/>
        <Route path="/todo/:id/edit" element={<EditTodo/>}/>
        {/* <Route path='/todo/:id' element={<NotFound/>} */}
     </Routes>
  );
};

export default Pages;
