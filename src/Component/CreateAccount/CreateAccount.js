import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './CreateAccount.css'
import {  handleGoogleSignIn, handleFbSignIn, createUserWithEmailAndPassword,initializeLoginFramework } from '../LoginHeaquater/LoginManager';
import { UserContext } from '../../App';

const CreateAccount = () => {
    initializeLoginFramework();
    //const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [checkPassWord, setCheckPassWord] = useState('');
    const [warning, setWarning] = useState();
    const [isValid, setIsvalid] = useState(true);
    

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        Conpassword: '',
        password: '',
        photo: ''
    });

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid) setWarning('Please check your Email');
        }
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 0 ? true : false;
            if (!isFieldValid) setWarning('Name is necessary plaease fill it');
        }
        if (e.target.name === 'Conpassword') {
            isFieldValid = checkPassWord === e.target.value;
            console.log(checkPassWord, e.target.value);
            if (!isFieldValid) setWarning('Please chek your confirmation password')

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            setCheckPassWord(e.target.value);
            setWarning('Atlest one digit should be inclue and length getter then 6')
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
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
        console.log('clicked',user);
        if (user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }


    return (


        <div className=" container loginSection">

            <form className="login-area " onSubmit={handleSubmit}>
                {
                    !isValid && <h3 style={{ color: 'red' }}> {warning} </h3>
                }
                <h3>Create an account</h3>
                <div>
                    <input type="text" onBlur={handleBlur} name="name" placeholder="Firsst name" />
                </div>
                <div>
                    <input type="text" onBlur={handleBlur} name="name" placeholder="Last name" />
                </div>
                <div>
                    <input type="text" onBlur={handleBlur} name="email" placeholder="User name or email" />
                </div>
                <div>
                    <input type="password" onBlur={handleBlur} name="password" placeholder="password" />
                </div>
                <div>
                    <input type="password" onBlur={handleBlur} name="Conpassword" placeholder="Confirm password" />
                </div>

                <br />

                <input type="submit" style={{backgroundColor:'orange',border:'1px solid orange'}} value='Create an account' />
                <p>Allready have an account?<Link to="/login">Log in</Link></p>

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
            </div>
        </div>
    );
};

export default CreateAccount;