import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddButton from './components/AddButton';
import UpdateButton from './components/UpdateButton';


function App() {
  const [employeesData, setEmployeesData] = useState([
    {
      id: 1,
      name: 'Saladin',
      role: 'Developer',
      src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'
    },
    {
      id: 2,
      name: 'Samy',
      role: 'Designer',
      src: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      id: 3,
      name: 'Omar',
      role: 'Intern',
      src: 'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg'
    },
    {
      id: 4,
      name: 'Adam',
      role: 'Intern',
      src: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Omar',
      role: 'Intern',
      src: 'https://images.pexels.com/photos/997489/pexels-photo-997489.jpeg'
    },
    {
      id: 5,
      name: 'Adam',
      role: 'Intern',
      src: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ])

  function changeData(id, newName, newRole) {
    setEmployeesData(prev => {
      return prev.map(employee => employee.id === id ? { ...employee, name: newName, role: newRole } : employee)
    })
  }

  function addEmployee(name, role, src) {
    setEmployeesData(prev => {
      return [...prev, { id: prev.length + 1, name: name, role: role, src: src }]
    })
  }

  const Data = employeesData.map(e => {
    const updateButton = <UpdateButton name={e.name} role={e.role} changeData={changeData} id={e.id} />

    return <Employee name={e.name} role={e.role} src={e.src} key={v4()} updateButton={updateButton} />
  })

  return (
    <div className="App">
      <div className='flex flex-wrap justify-center'>
        {Data}
      </div>
      <AddButton addEmployee={addEmployee} />
    </div>
  );
}

export default App;
