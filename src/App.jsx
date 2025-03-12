import './App.css'
import {FaHome} from 'react-icons/fa'
import { FaUserFriends } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Navlist from './component/navbar/navlist';
import Input from './component/input';
import { FaLinkedin } from "react-icons/fa";



function App() {
  return (
   <div className='navbar'>
    <Input/>
    <Navlist/>
   </div>   )
}

export default App