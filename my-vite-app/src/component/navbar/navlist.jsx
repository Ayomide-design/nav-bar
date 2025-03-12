function Navlist (){
    return(
        <ul className='navlist'>
           <li>Home < FaHome size={20}/></li>
               <li>My network<FaUserFriends size={20}/></li>
               <li>Jobs<FaGift size={20}/></li>
               <li>Messaging<AiFillMessage size={20}/></li>
               <li>Notification<IoIosNotifications size={24} /></li>
             </ul>
    )
}
export default Navlist