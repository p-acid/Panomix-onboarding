import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding/Onboarding';
import DashBoard from './pages/DashBoard/DashBoard';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

const RoutesJS = props => {
  return (
    <Router>
      <Routes>
        <Route path="/dash-board" element={<DashBoard />} />
        <Route path="/onboarding/*" element={<Onboarding />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default RoutesJS;
