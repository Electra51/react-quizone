import React from 'react';
import {RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Route';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App
