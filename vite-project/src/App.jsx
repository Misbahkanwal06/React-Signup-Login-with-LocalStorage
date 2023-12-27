import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigationbar from './components/Navigationbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Navigationbar/>
      <Routes>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
