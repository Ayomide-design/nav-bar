// import '../../App.css'
import { FaLinkedin } from "react-icons/fa";

 function Input (){
    return (
        <div className="text">
         <FaLinkedin size={29}/>
           <div className="int">
           <input type='text'className='input-text'placeholder='Type query'/>
            <button className='button'>search</button> 
            </div> 
         
    </div>
    )




 }
 export default Input