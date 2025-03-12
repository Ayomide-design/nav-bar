import { FaHome, FaUserFriends,FaGift } from "react-icons/fa"
import { AiFillMessage } from "react-icons/ai"
import {IoIosNotifications}from "react-icons/io"
import { FaUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

function Navlist (){
    return(
        <div className="container">
            <div className="icon-wrapper">
            <FaHome size={20}/>
            <FaUserFriends size={20}/>
            <FaGift size={20}/>
            <AiFillMessage size={20}/>
            <IoIosNotifications size={24}/>
            </div>
        <ul className='Nav'>
           <li>Home</li>
               <li>My network</li>
               <li>Jobs</li>
               <li>Messaging</li>
               <li>Notification</li>
               <FaUserCircle size={25}/>
               <FaCaretDown size={12} className="caret"/>
             </ul>
        </div>
    )
}
export default Navlist 