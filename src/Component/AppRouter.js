import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Error from '../Pages/Error';
import Drawer from './Drawer';




const AppRouter = () => {
 
  return (
    <div className="container px-5">
      <div className="container px-5 ms-5">
    <Router>
      <Drawer />
      <Routes>
        <Route path="/" element={<Outlet />}>
          {/* Define nested routes within the Outlet */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
    </div></div>);
};

export default AppRouter;
