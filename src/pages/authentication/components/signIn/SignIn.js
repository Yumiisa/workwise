import React, {useState} from 'react'
import Social from '../../../social/Social'
import { Link } from 'react-router-dom'
import "./SignIn.css"

const SignIn = () => {
     const[active,setActive]=useState("btn1")
  const handleActive =()=>{
    setActive('btn1')
  }
  const handleActiveBtn2 =()=>{
    setActive('btn2')
  }
  return (

    <div className='signInWrapper'>
        <h4>Sign In</h4>
            <span></span>
            <form>
                <input className='fontAwesome '  type='text' placeholder= '&#xf2c0; Username'/><br/>
                <input className='fontAwesome '  type='password' placeholder=' &#xf023; Password'/>
            </form>
        <div className='rememberActionWrapper'>
            <div className='checkwrapper'>
                <input type='radio' id='remember' name='remember' value='remember me'/>
                <label for='remember'>Remember me</label>
                
            </div>
                <p>Forgot Password?</p>
        </div>
        <div className='sign' >
            <p >Sign in</p>
            <div className='in'> 
                <Link to="/signup">Do not have account</Link>
            </div>
        </div>
        
      {/* <Social/> */}
    </div>
  )
}

export default SignIn
