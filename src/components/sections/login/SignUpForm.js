import React from 'react';
import Field from "./Field";

function SignUpForm(props) {

  function changeAuthMode() {
    props.changeMode();
  }

  return (
      <form className='Auth-form'>
        <div>
          <h3>Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <Field
              label="Full name"
              type="email"
              placeholder="e.g Jane Doe"
          />
          <Field
              label="Email address"
              type="email"
              placeholder="Email Address"
          />
          <Field
              label="Password"
              type="password"
              placeholder="Password"
          />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
  );
}

export default SignUpForm;