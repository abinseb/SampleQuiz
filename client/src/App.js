import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Common/Home";
import AdminHeader from "./components/Header/AdminHeader";
import ModeratorHeader from "./components/Header/ModeratorHeader";
import PublicHeader from "./components/Header/PublicHeader";
import Heder from "./components/Common/Heder";

import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";




const  App=()=> {

  const userRole = '';

  const getHeaderComponent = ()=>{
    switch(userRole){
      case 'admin':
        return <AdminHeader/>;
      case 'moderator':
        return<ModeratorHeader/>;
      case 'public':
        return <PublicHeader/>;
      default:
        return <Heder/>
      
    }

  };
  return (
    <Router>
      {getHeaderComponent()}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path ="/publicReg" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
     
      </Routes>
      
        

      
    
    </Router>
    
  );
}

export default App;
