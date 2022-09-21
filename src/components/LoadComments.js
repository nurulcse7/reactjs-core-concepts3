import React, { useEffect, useState } from 'react'

function LoadComments(){
    const [comments, setComments] = useState([]);
  
    useEffect( () =>{
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
    }, [])
  
    return (
      <div style={{margin: '50px'}}>
        <h2> comments: {comments.length}</h2>
        {
          comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
        }
      </div>
    )
  
  }

  function Comment(props){
    return (
      <div>
        <h4>email: {props.email}</h4>
        <p>{props.body}</p>
      </div>
    )
  }

export default LoadComments