import Sidebar from "./components/sidebar/Sidebar.jsx";

import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";

import {
  Routes,
  Route
} from "react-router-dom";
import Supervisor from "./pages/Supervisor/Supervisor.jsx";

import EditSup from "./pages/Supervisor/e/Editsup.jsx";
import AddSup from "./pages/Supervisor/add/AddSup.jsx";
import Conductor from "./pages/conductor/Conductor.jsx";
import AddCon from "./pages/conductor/add/AddCon.jsx";
import Schedule from "./pages/schedule/Schedule.jsx";
import Bus from "./pages/Bus/Bus.jsx";
import EditCon from "./pages/conductor/edit/EditCon.jsx";
import Login from './pages/Login/Login.jsx'
import PrivateRoute from "./privateroute.jsx";

import { createContext, useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import Unauthorized from "./components/Unauthorized/Unauthorized.jsx";
import RequireAuth from './components/Authentication/RequireAuth'
import Missing from "./components/NotFound/Missing.jsx";
import useAuth from "./hooks/useAuth.jsx";
import Topbar from "./components/topbar/Topbar.jsx";

function App() {
  
  const {auth} = useAuth();
  
  return (

    <>
    {auth?<Topbar /> : () => {}}
    
      
      <div className="container">
        {auth? <Sidebar /> : () => {}}
        <Routes>
          
          <Route exact path="/" element={<Layout /> } >
          <Route exact path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
            
          <Route exact path="/" element={<Homepage />} />
          </Route>


          <Route exact path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />

          {/*
          <Route exact path="/supervisor/:id" element={<EditSup />} />  
          <Route exact path="/supervisor/add" element={<AddSup />} />  
          <Route exact path="/conductor" element={<Conductor />} />  
          <Route exact path="/conductor/add" element={<AddCon />} /> 
          <Route exact path="/conductor/:id" element={<EditCon />} />  
          <Route exact path="/schedule" element={<Schedule />} />  
          <Route exact path="/bus" element={<Bus />} />  
  */}


          </Route>
        </Routes>
      </div>
      </>
  );
}

export default App;
