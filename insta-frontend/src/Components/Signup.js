import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Signup({setsesh}) {

    const history = useHistory()
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
    setsesh(prev => {
        return{
            ...prev,
            requesting: true
        }
    })
    const params = {
        user: {
            ...formData
        }
    }

    fetch("http://localhost:3001/signup", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
    })
    .then(resp => resp.json())
    .then(userInfo => {
        setsesh(prev => {
            return{
                user: {...userInfo},
                loggedin: true,
                requesting: false
            }
        })
        history.push("/")
    })

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
                <input type="submit" value="Register"  />
            </form>
        </div>
    )
}

export default Signup;