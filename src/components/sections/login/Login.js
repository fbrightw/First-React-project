import React, {useState} from "react"
import {ParticlesBackground} from "../../../utils/forms/ParticlesBackground";
import './index.css'
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../../../store/reducers/auth/action-creators";

export default function Login() {
  let [isSignInMode, setIsSignInMode] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const changeAuthMode = () => {
    setAuthMode(authMode === "signIn" ? "signUp" : "signIn")
  }

  const onSubmit = () => {
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const url = window.location.href
    //     const data = await fetch(url + '/login')
    //         .then((response) => {
    //           console.log("here", data)
    //               // if (response.status === 200) {
    //                 navigate(RouteNames.HOME, {replace: true})
    //               // }
    //             }
    //         )
    //
    //   }
    // })
    dispatch(AuthActionCreators.login('', ''))

  }

  function changeMode() {
    setIsSignInMode(!isSignInMode)
  }

  return (
      <div className="Auth-form-container">
        <ParticlesBackground/>
        {isSignInMode ?
            <SignInForm changeMode={changeMode}/> : <SignUpForm changeMode={changeMode}/>}
      </div>
  )
};
