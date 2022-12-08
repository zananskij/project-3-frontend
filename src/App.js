import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './components/Post'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [post, setPost] = useState([])

  const getPost = () => {
    axios.get('http://localhost:3000/twitter')
      .then(
        (response) => setPost(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/twitter/' , data).then((response) => {
      console.log(response)
      getPost()
    })
  }

      const handleEdit = (data) => {
        axios.put('http://localhost:3000/twitter/' + data._id, data)
        .then((response) => {
           let newPost = post.map((post) => {
             return post._id !== data._id? post:data         
           })
           setPost(newPost)
        })
       }
 

  const handleDelete = (deletedPost) => {
    axios.delete('http://localhost:3000/twitter/' + deletedPost._id).then((response) => {
      getPost()
    })
  }

  useEffect(() => {
    getPost()
  }, [])

  return(
    <div>
      <h1>Post</h1>
      <Add handleCreate={handleCreate}/>
      {post.map((post) => {
         return (
          <div>
            <Post post={post} />
            <Edit post={post} handleEdit={handleEdit}/>
            <button onClick={() => {handleDelete(post)            
            }} value={post._id}>X</button>
          </div>
         )
      })}
    </div>
   )
}

export default App
