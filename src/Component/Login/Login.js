import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import {   signInWithEmailAndPassword, initializeLoginFramework, } from '../LoginHeaquater/LoginManager';
import {  handleGoogleSignIn, handleFbSignIn,} from '../LoginHeaquater/LoginManager';
import './Login.css'

const Login = () => {
    initializeLoginFramework();
    const [warning,setWarning] =useState();
    const [isValid,setIsvalid]=useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
 
    
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        Conpassword:'',
        password: '',
        photo: ''
    });
    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); 
          if(!isFieldValid)setWarning('Please check your Email');
        }
        
        if(e.target.name === 'password'){
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber =  /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
          setWarning('Atlest one digit should be inclue and length getter then 6')
        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
        setIsvalid(isFieldValid);
        
      }

        const googleSignIn = () => {
          handleGoogleSignIn()
              .then(res => {
                  handleResponse(res, true);
              })
      }

    const fbSignIn = () => {
            handleFbSignIn()
            .then(res => {
                console.log('the res value',res);
                handleResponse(res, true);
            })

    }
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }
      const handleSubmit = (e) => {
       
        if(user.email && user.password){
          signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            handleResponse(res, true);
          })
        }
        e.preventDefault();
      }

    return (
        <div className=" container loginSection">

            <form class="login-area " onSubmit={handleSubmit}>
                {
                    !isValid && <h3 style={{color:'red'}}> {warning} </h3>
                }
                <h3>Login</h3>
                <div>
                    <input type="text" onBlur={handleBlur} name="email" placeholder="User name or email" />
                </div>
                <div>
                    <input type="password" onBlur={handleBlur} name="password" placeholder="password" />
                </div>

                <input type="checkbox" name="remember" value="remember me" />
                <span class="remember">Remember me</span>
                <a href="#">Forgot Password</a>
                <br />

                <button class="bttn">Log in</button>
                <p>Don't have an account?<a href="#">Create an account</a></p>

            </form>
            <br />
            <div class="d-flex fakeBorder bottomPart">
                <hr />
                <span >or</span>
                <hr />
            </div>
            <div class="bottomPart">
                <button onClick={fbSignIn} class="bttnGf"><img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" />
                                            Continue with facebook
                                            </button>
                <br />
                <button onClick={googleSignIn} class="bttnGf">
                <img src="https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png" />
                                                        Continue with Google</button>
            </div>                                 </div>
    );
};

export default Login;