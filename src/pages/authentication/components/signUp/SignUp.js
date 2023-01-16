import React, {useState} from 'react'
import "./SignUp.css"

const SignUp = () => {
//     const[active,setActive]=useState("btn1")
//   const handleActive =()=>{
//     setActive('btn1')
//   }
//   const handleActiveBtn2 =()=>{
//     setActive('btn2')
//   }
  return (
    <div className='signInWrapper'>
      
                    
                    {/* <div className='signup'>
                     <div className='signm'>
                        <p>&#xf177; </p>
                        <p className='john'>  johndoe@example.com</p>
                     </div>
                        <div className='buttons'>
                        <button onClick={handleActive} className={active ==='btn1'? 'activeBtn':''}>User</button>
                <button onClick={handleActiveBtn2} className={active ==="btn2"? "activeBtn":""}>Company</button>
                        
                        </div>
                        
                    </div> */}
                    <form>
                      <input className='fontAwesome' type='text'placeholder='&#xf2c0;  Full name'/><br/>
                      <input className='fontAwesome' type='text'placeholder='&#xf0ac;  Email'/><br/>
                      
                      <input className='fontAwesome' type='text'placeholder='&#xf023;  Password'/><br/>
                      <input className='fontAwesome' type='text'placeholder='&#xf023;  confirm password '/><br/>
      
            <div className='check'>
                <input type='radio' id='remember' name='remember' value='remember me'/>
                <label for='remember'><small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                    </label>
                
            </div>
                
       
                      {/* <div className='checkwrapper'>
                <input type='radio' id='remember' name='remember' value='remember me'/>
                <label for='remember'>Yes, I understand and agree to the workwise Terms & Conditions.</label>
                
            </div> */}
           <div className='sign'><p  className='get'>Get started</p>
      </div>
                
            
                    </form>
                    

                  </div> 
  )
}

export default SignUp