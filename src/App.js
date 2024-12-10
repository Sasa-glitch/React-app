import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState("dev")
  return (
    <div className="App bg-red-300">
      <input type="text" onChange={(e) => {
        console.log(e.target.value)
        setRole(() => e.target.value)
      }} />
      <Employee name="GLITCH" />
      <Employee role={role} />
      <Employee />
      <Employee />
    </div>
  );
}

export default App;
