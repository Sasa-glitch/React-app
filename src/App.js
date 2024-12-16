import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Employees from './pages/Employees';
import Team from './pages/Team'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='bg-gray-400 min-h-screen p-2'>
        <Routes>
          <Route path='/Employees' element={<Employees />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
