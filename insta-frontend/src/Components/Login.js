import React, { useState } from 'react'

function Login() {


    const [formData, setformData] = useState(
        {
            name: "",
            password: ""
        }
    )
    const handleChange = (e) => {
        setformData((prevState) => {
            return{
                ...prevState,
                [e.target.name]: e.target.value
            }
        }

        )
    }

const handleSubmit =(e) => {
    e.preventDefault()
    fetch("http://localhost:3001/login")
    .then(resp => resp.json())
    .then(json => console.log(json))

}



    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name</label>
                    <input onChange={handleChange} value={formData.name} type='text' name='name'/>
                    
                </div>
                <div>
                <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={formData.password}type='password' name='password'/>
                    
                </div>
                <input type="submit" value="Login"  />
            </form>
        </div>
    )
}

export default Login;