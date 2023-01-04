import React, {useEffect, useState} from "react"
import {ParticlesBackground} from "../../../utils/ParticlesBackground";
import './index.css'
import SignUpForm from "./SignUpForm";
import Field from "./Field";
import SignInForm from "./SignInForm";

export default function Login() {
  let [isSignInMode, setIsSignInMode] = useState(true)

  const changeAuthMode = () => {
    setAuthMode(authMode === "signIn" ? "signUp" : "signIn")
  }

  const onSubmit = () => {
    useEffect(() => {
      const fetchData = async () => {
        const url = window.location.href
        const data = await fetch(url + '/login')
            .then((response) => {
                  if (response.status === 200) {
                    () => DICTIONARY.homePage()
                  }
                }
            )

      }
    })
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
