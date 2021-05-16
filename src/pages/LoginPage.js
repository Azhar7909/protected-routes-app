import React, { useState } from 'react'
import Utils from '../components/Utils';
var utils = new Utils();

export default function LoginPage() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        utils.createLocalStorage('email',email)
        window.location = window.location.origin + "/dashboard";
    }

  return (
    <div className="m-5">
      <h1 className="text-center">Login Page</h1>
      <form onSubmit={(e)=>handleSubmit(e)} style={{width:"300px",margin:"auto"}}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}
