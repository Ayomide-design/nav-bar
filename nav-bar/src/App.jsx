import './App.css'
import {FaHome} from 'react-icons/fa'
import { FaUserFriends } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

function App() {

  return (
    <>
      <nav>
        <div className='input-text'>
            <input type='text'placeholder='Type query'/> 
           <button className='button'>search</button> 
        </div>
          
        <ul className='Nav'>
          <li>Home < FaHome size={20}/></li>
          <li>My network<FaUserFriends size={20}/></li>
          <li>Jobs<FaGift size={20}/></li>
          <li>Messaging<AiFillMessage size={20}/></li>
          <li>Notification<IoIosNotifications size={24} /></li>
        </ul>
      </nav>
    </>
  )
}

export default App
