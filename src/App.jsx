import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Food from "./pages/Food";
import Users from "./components/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index={true} element={<Home/>}/>
        <Route path="/recipes" element={<Food/>}/>
      <Route path="/users" element={<Users/>}/>
      </Route>
    </Routes>
  );
};

export default React.memo(App);
