//import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
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



import Layout from "./components/Layout/Layout.jsx";
import Unauthorized from "./components/Unauthorized/Unauthorized.jsx";
import Missing from "./components/NotFound/Missing.jsx";
import { useState, useMemo } from 'react';
import { UserContext } from "./UserContext.jsx";
import NewRoute from "./pages/schedule/newRoute.jsx";
import Alerts from "./pages/Alerts/Alerts.jsx";
import Student from "./pages/students/Students.jsx";
import SpuStudent from "./pages/SpuStudent/SpuStudent.jsx";
import Complains from "./pages/Complains/complains.jsx";
import NewComplain from "./pages/Complains/Add/newComplain.jsx";
import Complain from "./pages/Complains/Complain/Complain.jsx";
import NewBus from "./pages/Bus/NewBus.jsx";
import ModifyBus from "./pages/Bus/ModifyBus.jsx";



function App() {
  
  const [user, setUser] = useState(true);
  
  const userProvider = useMemo(() => ([user, setUser]), [user, setUser]);
  
  
  return (
    <UserContext.Provider value={userProvider}>
      <Routes>
          <Route
            exact path="/login"
            element={<Login />} />
        
          <Route path="/" element={<Layout />} >

            <Route path="/" element={<Homepage />} />
            <Route exact path="/supervisor" element={<Supervisor />} />
            <Route exact path="/supervisor/:id" element={<EditSup />} />
            <Route exact path="/supervisor/add" element={<AddSup />} /> 
            <Route exact path="/conductor" element={<Conductor />} />  
            <Route exact path="/conductor/add" element={<AddCon />} /> 
            <Route exact path="/conductor/:id" element={<EditCon />} />
            <Route exact path="/schedule" element={<Schedule />} />  
            <Route exact path="/schedule/add" element={<NewRoute />} />  
            <Route exact path="/bus" element={<Bus />} />
            <Route exact path="/bus/add" element={<NewBus />} /> 
            <Route exact path="/bus/:id" element={<ModifyBus />} />
            <Route exact path="/alerts" element={<Alerts />} />
            <Route exact path="/students" element={<Student />} />
            <Route exact path="/students/register" element={<SpuStudent />} />
            <Route exact path="/complains" element={<Complains />} />
            <Route exact path="/complains/add" element={<NewComplain />} />
            <Route exact path="/complains/:id" element={<Complain />} />
            <Route path="*" element={<Missing  />} />


            </Route>
            
          
   

      <Route path="*" element={<Unauthorized  />} />


        
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
