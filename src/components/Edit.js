import { useState } from 'react'

const Edit = (props) => {
  const [post, setPost] = useState({ ...props.post })

  //   edit
  //   edit
  // const [editAlert, setEditAlert] = useState(false)
  // const [value, setValue] = useState(null);
  //   edit
  //   edit
  //   edit
  //   edit
  //   edit
  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleEdit(post)
  }

  return (
    <div>
      {/* <button onClick={}>Edit Post</button> */}
      <details>
        <summary>Edit Tweet</summary>

        <form onSubmit={handleSubmit}>
          <label htmlFor="location">location : </label>
          <input type="text" name="location" onChange={handleChange} value={post.location} />
          <br />
          <br />
          <label htmlFor="post">Post : </label>
          <input type="text" name="post" onChange={handleChange} value={post.post} />
          <br />
          <br />
          <label htmlFor="date">date : </label>
          <input type="date" name="date" onChange={handleChange} value={post.date} />
          <br></br>
          <label htmlFor="img">Image : </label>
          <input type="text" name="img" onChange={handleChange} value={post.img} />
          <br></br>
          <input className="" type="submit" />
        </form>
      </details>
    </div>
  )
}

export default Edit