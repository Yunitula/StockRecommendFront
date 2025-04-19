import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
