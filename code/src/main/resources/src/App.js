//import logo from './images/logo.svg';

import './pages/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Studentenliste from './pages/Studentenliste'; // Import der neuen Seite
import Homepage from './pages/Homepage';
import StudentenlisteEdit from './pages/Studentenliste-edit';
import Add from './pages/add';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Studentenliste" element={<Studentenliste />} />
          <Route path="/Studentenliste-edit" element={<StudentenlisteEdit />} />
          <Route path="/add" element={<Add />} />
        </Routes>
        
        </BrowserRouter>
     
    </div>
    
  );
}

export default App;
