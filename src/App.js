import { useState, useEffect } from 'react'
import axios from 'axios'
// import Post from './components/Post'
// import Add from './components/Add'
// import Edit from './components/Edit'

const App = () => {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios
      .get('http://localhost:3000/twitter')
      .then(
        (response) => setPosts(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/twitter/' + data._id, data).then((response) => {
      console.log(response)
      let newPost = posts.map((post) => {
        return post._id !== data._id ? posts : data
      })
      setPosts(newPost)
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3003/twitter/' + data._id, data).then((response) => {
      console.log(response)
      let newPost = post.map((post) => {
        return posts._id !== data._id ? post : data
      })
      setPost(newPost)
    })
  }

  const handleDelete = (deletedPost) => {
    axios.delete('http://localhost:3000/twitter/' + deletedPost._id).then((response) => {
      let newPost = posts.filter((posts) => {
        return posts._id !== deletedPost._id
      })
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h1> Twitter Clone</h1>
    </>
  )
}

export default App
