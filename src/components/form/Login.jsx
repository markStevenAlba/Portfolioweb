import React from 'react';
import './form.css';

function Login() {
  return (
    <div className="form__container">
        <form>
            <div className="input__container">
                <label>Email </label>
                <input type="text" name="email" required />
            </div>
            
            <div className="input__container">
                <label> Password </label>
                <input type="password" name="password" required />
            </div>
            
            <div className="button__container">
                <input type="submit" />
            </div>
        
        </form>
    </div>
  )
}

export default Login