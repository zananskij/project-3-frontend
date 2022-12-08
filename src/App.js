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

  const[show,setShow]=useState(false);




  useEffect(() => {
    getPost()
  }, [])


  return(
    <div className='container-fluid m-auto-0'>
      <nav className="navbar bg-light ">
        <img src=''/>
        <button onClick={()=>setShow(!show)}>Add</button>
        <button></button>
      </nav>
      <h1 className= "text-center">twitterClone</h1>
      {
      show? <Add handleCreate={handleCreate}/>
      :null
      }
      <div className='row post-container text-center'>
      {post.map((post) => {
         return (
          <div>
            <div className='col-12'>
            <Post post={post} />
            </div>

            <Edit post={post} handleEdit={handleEdit}/>
            <button className="btn btn-outline-danger" onClick={() => {handleDelete(post)            
            }} value={post._id}>Delete</button>
          </div>
         )
      })}
      </div>
    </div>
   )
}

export default App
