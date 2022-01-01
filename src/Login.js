import React, {useState} from 'react';
import './Login.css';
 import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/counter/userSlice";

function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [profile, setProfile] = useState();
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert('Please enter full name');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profile
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profile
                        }))
                    });
            }).catch((error) => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,

                }))
            }).catch(error => alert(error));
    };
    return (
        <div className={"login"}>
            <h4 className={"logo"}>Linked <span>in</span></h4>

            <form action="" className={"login__form"} >
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={"Full name required of registration"}/>
                <input type="text" value={profile} onChange={e => setProfile(e.target.value)} placeholder={" Profile pic url (OPTIONAL) "}/>

                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={"Your email"}/>

                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={"********"}/>

                <button className={"login__btn"} type={"submit"} onClick={loginToApp} >Sign In</button>
            </form>
            <p>Not a member?
                <span className="login__register" onClick={register} >  Register Now</span>
            </p>
        </div>
    );
}

export default Login;