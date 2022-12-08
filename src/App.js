import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './components/Post'
import Add from './components/Add'
// import Edit from './components/Edit'

const App = () => {
  const [post, setPost] = useState([])

  const getPost = () => {
    axios
      .get('http://localhost:3000/twitter')
      .then(
        (response) => setPost(response.data),
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/twitter/' + data._id, data).then((response) => {
      console.log(response)
      let newPost = post.map((post) => {
        return post._id !== data._id ? post : data
      })
      setPost(newPost)
    })
  }

  // const handleEdit = (data) => {
  //   axios.put('http://localhost:3003/twitter/' + data._id, data).then((response) => {
  //     console.log(response)
  //     let newPost = post.map((post) => {
  //       return post._id !== data._id ? post : data
  //     })
  //     setPost(newPost)
  //   })
  // }

  // const handleDelete = (deletedPost) => {
  //   axios.delete('http://localhost:3000/twitter/' + deletedPost._id).then((response) => {
  //     let newPost = post.filter((post) => {
  //       return post._id !== deletedPost._id
  //     })
  //   })
  // }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <h1> Twitter Clone</h1>
      <Post post={post} />
      <Add handleCreate={handleCreate} />
    </>
  )
}

export default App
