import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo2.png'

const Login = () => {

  const [signState, setSignState] = useState("Login")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Register"? <input type="email" placeholder='Email' /> :<></>}
          {signState==="Register"? <input type="password2" placeholder='Re-enter Password' /> : <></>}
          
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Login"? 
          <p>New to Netflix? <span onClick={()=> {setSignState("Register")}}>Register Now</span></p> : 
          <p>Already have an account? <span span onClick={()=> {setSignState("Login")}}>Login</span></p>}        
        </div>
      </div>
    </div>
  )
}

export default Login
