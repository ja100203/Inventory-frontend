import React from "react";
import Signin from "../authentication/Signin";
import PinLogin from "../authentication/PinLogin";
import Mpin from "../authentication/Mpin";
import Dashboard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const MainRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/set-mpin" element={<Mpin />} />
      <Route path="/mpin" element={<PinLogin />} />
    </Routes>
  );
};

export default MainRouting;
