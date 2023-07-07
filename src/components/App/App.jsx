import React, { useEffect } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from "../../features/products/productsSlice";

import video from "../../images/quad_video.mp4"

import UserForm from "../User/UserForm";

const App = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getCategories());
  dispatch(getProducts());
}, [dispatch]);

  return (
  <div className='app'>
    <Header />
    <div className="main">
      <video src={video} autoPlay loop muted />
      <main/>
    </div>
    <UserForm />
    <div className='box'>
    <Sidebar/>
    <AppRoutes />
    </div>
    <Footer/>
  </div>
  );
};

export default App;
