import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './components/Post'
import Add from './components/Add'
import Edit from './components/Edit'
import Search from './components/Search'

// load api
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const App = () => {
  const [post, setPost] = useState([])

  // search
  const [isSearching, setIsSearching] = useState(false)
  const [filteredPost, setFilteredPost] = useState([])
  // search

  // check if map loaded
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })
  // map

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
    axios.post('http://localhost:3000/twitter/', data).then((response) => {
      console.log(response)
      getPost()
    })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/twitter/' + data._id, data).then((response) => {
      let newPost = post.map((post) => {
        return post._id !== data._id ? post : data
      })
      setPost(newPost)
    })
  }

  const handleDelete = (deletedPost) => {
    axios.delete('http://localhost:3000/twitter/' + deletedPost._id).then((response) => {
      getPost()
    })
  }
  // search
  // search
  // search
  const onSearchChange = (searchInput) => {
    const searchInputLower = searchInput.toLowerCase()
    if (searchInput.length > 0) {
      setIsSearching(true)
      const result = post.filter((post) => {
        return (
          post.location.toLowerCase().match(searchInputLower) ||
          post.post.toLowerCase().match(searchInputLower) ||
          post.date.toLowerCase().match(searchInputLower)
        )
      })
      setFilteredPost(result)
    } else {
      setIsSearching(false)
    }
  }

  const NoSearchResults = () => {
    return (
      <>
        <p className="noResults">No related posts found...</p>
      </>
    )
  }

  const postToDisplay = isSearching ? filteredPost : post
  // search
  // search
  // search

  const [show, setShow] = useState(false)

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="container-fluid m-auto-0">
      <nav className="navbar bg-light">
        <img className=" w-25 rounded" />
        <Search onSearchChange={onSearchChange} />
        <NoSearchResults />
        <button onClick={() => setShow(!show)}>Add</button>
        <button></button>

        <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName="map-container"></GoogleMap>
      </nav>
      <h1 className="text-center">twitterClone</h1>
      {show ? <Add handleCreate={handleCreate} /> : null}
      <div className="row post-container text-center">
        {postToDisplay.map((post) => {
          return (
            <div className="m-2">
              <div className="col-12 m-auto ">
                <Post post={post} />
              </div>

              <Edit post={post} handleEdit={handleEdit} />
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  handleDelete(post)
                }}
                value={post._id}
              >
                Delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
