import { useState } from 'react'

const Add = (props) => {
  const [post, setPost] = useState({ post: '', img: '', location: '', date: '' })

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(post)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">location : </label>
        <input type="text" name="location" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="post">Post : </label>
        <input type="text" name="post" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="date">date : </label>
        <input type="date" name="date" onChange={handleChange} />
        <br></br>
        <label htmlFor="img">Image : </label>
        <input type="text" name="img" onChange={handleChange} />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Add
