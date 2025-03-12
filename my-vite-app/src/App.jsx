import { useState } from 'react'
import './App.css'
import './index.css'
import Input from './component/input'
import Navlist from './component/navbar/navlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='nav'>
      <Input/> 
      <Navlist/>
    </div>
  )
}

export default App
