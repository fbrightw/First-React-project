import React from 'react';
import Field from "./Field";
import {AuthActionCreators} from "../../../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";

function SignInForm(props) {

  const dispatch = useDispatch();

  function changeAuthMode() {
    props.changeMode();
  }

  function onSubmit() {
    dispatch(AuthActionCreators.login('', ''))
  }

  return (
      <form className="Auth-form">
        <div>
          <h3>Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
          <Field
              label="Email address"
              type="email"
              placeholder="Enter email"
          />
          <Field
              label="Password"
              type="email"
              placeholder="Enter password"
          />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"
                    onChange={onSubmit}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="src/components/sections/login/Login#">password?</a>
          </p>
        </div>
      </form>
  );
}

export default SignInForm;