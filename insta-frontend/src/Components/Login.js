import React from 'react'

function Login() {
    return(
        <div>
            <form>
                <div>
                    <input  type='text' name='name'/>
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input  type='password' name='password'/>
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login"  />
            </form>
        </div>
    )
}

export default Login;