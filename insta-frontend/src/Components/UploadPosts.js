import React, { useState } from 'react'

function Upload() {

    const [formData, setformData] = useState(
        {
            file: "",
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

    return(
        <div>
            <p>Share a pic</p>

            <form>
                <div>
                    <input onChange={handleFileChange} type='file' name='file'/>
                    
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