// import { useState, useRef } from 'react'

// const Search = () => {
//   const [items, setItems] = useState([])
//   //   this will be post
//   const [query, setQuery] = useState('')
//   //    this will be what is searched
//   const inputRef = useRef()
//   //   inputRef allows us to access input element below

//   const filteredItems = items.filter((item) => {
//     return item.toLowerCase().includes(query.toLowerCase())
//   })
//   //   could wrap filteredItems in useMemo() hook to improve performance

//   function onSubmit(e) {
//     e.preventDefault()
//     // makes sure form doesnt refresh page

//     const value = inputRef.current.value
//     if (value === '') return
//     // if a empty string... return nothing
//     setItems((prev) => {
//       return [...prev, value]
//       // if not return all previous inputs + new value
//     })
//     inputRef.current.value = ''
//     // sets input text back to an empty string
//   }

//   return (
//     <>
//       Search:
//       <input value={query} type="search">
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         {/* w/e you search will set the value for Query */}
//       </input>
//       <br />
//       <br />
//       <form onSubmit={onSubmit}>
//         New Item: <input ref={inputRef} type="text" />
//         <button type="submit">Add</button>
//       </form>
//       <h3>Items:</h3>
//       {filteredItems.map((item) => (
//         <div>{item}</div>
//       ))}
//     </>
//   )
// }

// export default Search

// import { useState } from 'react'

// const SearchBar = ({ post, setSearchResults }) => {
//   const handleSubmit = (e) => e.preventDefault()

//   const handleSearchChange = (e) => {
//     if (!e.target.value) return setSearchResults(post)

//     const resultsArray = post.filter((post) => post.title.includes(e.target.value))

//     setSearchResults(resultsArray)
//   }

//   return (
//     <header>
//       <form onSubmit={handleSubmit}>
//         <input> type= "text" id="search" onChange={handleSearchChange}</input>
//       </form>
//       <button>Search</button>
//     </header>
//   )
// }

// export default SearchBar

import { useState } from 'react'

const SearchBar = ({ onSearchChange }) => {
  const [searchInput, setSearchInput] = useState('')

  // Function for Search bar
  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
    onSearchChange(e.target.value)
  }
  return (
    <div className="searchBarContainer">
      <input type="text" value={searchInput} placeholder="Search..." onChange={handleSearchChange} />
    </div>
  )
}

export default SearchBar
