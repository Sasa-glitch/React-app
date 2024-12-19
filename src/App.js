import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Employees from './pages/Employees';
import Team from './pages/Team'
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import Page404 from './pages/Page404';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='bg-gray-400 min-h-screen p-2'>
        <Routes>
          <Route path='/Employees' element={<Employees />} />
          <Route path='/team' element={<Team />} />
          <Route path='/Dictionary' element={<Dictionary />} />
          <Route path='/Definition' element={<Definition />} />
          <Route path='/Dictionary/:search' element={<Definition />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
