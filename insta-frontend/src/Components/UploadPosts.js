import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Upload() {
const history= useHistory()
    const [formData, setformData] = useState(
        {
            photo: "",
            caption: ""
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


const   handleFileChange = (e) => {
    setformData((prevState) => {            
         return{
            ...prevState,            
            [e.target.name]: e.target.files[0]            
         }                      
    }            

    )            
}            

const handleSubmit =(e) => {
    e.preventDefault();
    const {photo, caption} = formData
    let postInfo = new FormData()
    postInfo.append("photo", photo)
    postInfo.append("caption", caption)
    fetch("http://localhost:3001/posts", {
        method: "POST",
        body: postInfo
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))
    history.push("/photos")
}


    return(
        <div>
            <p>Share a pic</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleFileChange} type='file' name='photo'/>
                    
                </div>
                <div>
                    <input onChange={handleChange} value={formData.caption} type='text' name='caption'/>
                    <label htmlFor="caption">Caption</label>
                </div>
                <input type="submit" value="Upload Post"  />
            </form>
        </div>
    )
}

export default Upload;