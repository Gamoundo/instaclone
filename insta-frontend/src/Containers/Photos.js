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
            <div>
                <img  src={ele.photo} alt={ele.caption} width="200px" height="200px"/>
                <p>{ele.caption}</p>
                <p>Likes {ele.likes}</p>
            </div>
        )
    }

    ))
}

    return(
        <div>
            <h1> The Photos</h1>
            {post.length >=1 && displayPosts(post)}
        </div>
    )
    
}

export default Photos;