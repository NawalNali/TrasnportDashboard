import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";

import {
  BrowserRouter as Router,
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


function App() {
  
  
  
  return (

    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        
        <Routes>

           
          <Route exact path="/" element= {<Homepage /> } /> 
          <Route exact path="/supervisor" element={<Supervisor />} />
          <Route exact path="/supervisor/:id" element={<EditSup />} />  
          <Route exact path="/supervisor/add" element={<AddSup />} />  
          <Route exact path="/conductor" element={<Conductor />} />  
          <Route exact path="/conductor/add" element={<AddCon />} /> 
          <Route exact path="/conductor/:id" element={<EditCon />} />  
          <Route exact path="/schedule" element={<Schedule />} />  
          <Route exact path="/bus" element={<Bus />} />  

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
