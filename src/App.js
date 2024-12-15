import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Employees from './pages/Employees';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/Employees' element={<Employees />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
