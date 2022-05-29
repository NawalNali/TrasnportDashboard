//import './App.css';
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
import Login from './pages/Login/Login.jsx'



import Layout from "./components/Layout/Layout.jsx";
import Unauthorized from "./components/Unauthorized/Unauthorized.jsx";
import RequireAuth from './components/Authentication/RequireAuth'
import Missing from "./components/NotFound/Missing.jsx";
import useAuth from "./hooks/useAuth.jsx";


function App() {
  
  const {auth} = useAuth();
  
  return (

    
 
      
      <div className="container">
        
        
        <Routes>
          
          <Route exact path="/" element={<Layout /> } >
          <Route exact path="/login" element={<Login />} />

          <Route element={<RequireAuth />}>
          <Route exact path="/" element={<Homepage />} />
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/supervisor" element={<Supervisor />} />
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/supervisor/:id" element={<EditSup />} />
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/supervisor/add" element={<AddSup />} /> 
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/conductor" element={<Conductor />} />  
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/conductor/add" element={<AddCon />} /> 
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/conductor/:id" element={<EditCon />} />  
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/schedule" element={<Schedule />} />  
          </Route>

          <Route element={<RequireAuth />}>
          <Route exact path="/bus" element={<Bus />} /> 
          </Route>

          <Route exact path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<Missing />} />



          </Route>
        </Routes>
      </div>
      
  );
}

export default App;
