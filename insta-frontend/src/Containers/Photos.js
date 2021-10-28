import React, { useEffect, useState } from 'react'

function Photos() {

const [post, setpost] = useState([])

useEffect(() => {
    fetch("http://localhost:3001/posts")
    .then(resp => resp.json())
    .then(setpost)
}, [])
console.log(post)
const displayPosts = (arr) => {
    return(arr.map((ele) => {
        return(
            <div className="post">
                <img  src={ele.photo} alt={ele.caption} width="200px" height="200px"/>
                <p>{ele.caption}</p>
                <div className="srow">
                    <p>Likes {ele.likes}</p>
                    <button> Like!</button>
                </div>
                
            </div>
        )
    }

    ))
}

    return(
        <div>
            <h1> The Photos</h1>
            <div className="row">
                
                {post.length >=1 && displayPosts(post)}
            </div>
        </div>
        
    )
    
}

export default Photos;