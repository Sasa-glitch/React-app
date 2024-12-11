import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [role, setRole] = useState("dev")
  const [employeesData, setEmployeesData] = useState([
    {
      name: 'Saladin',
      role: 'Developer',
      src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    {
      name: 'Samy',
      role: 'Designer',
      src: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Omar',
      role: 'Intern',
      src: 'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg'
    },
    {
      name: 'Adam',
      role: 'Intern',
      src: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ])
  const Data = employeesData.map(e => <Employee name={e.name} role={e.role} src={e.src} key={v4()} />)
  return (
    <div className="App">
      <input type="text" onChange={(e) => {
        console.log(e.target.value)
        setRole(() => e.target.value)
      }} />
      <div className='flex flex-wrap justify-center'>
        {Data}
      </div>
    </div>
  );
}

export default App;
