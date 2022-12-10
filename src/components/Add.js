
import { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete';

const Add = (props) => {
  const [post, setPost] = useState({ post: '', img: '', location: '', date: '' })

  const [value, setValue] = useState(null);

    useEffect(() => {
        console.log(value)

        if (value) {
            geocodeByPlaceId(value.value.place_id)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                setPost({ ...post, locationDisplayName: value.value.structured_formatting.main_text, address: value.label, latitude: lat, longitude: lng })
                console.log('Successfully got latitude and longitude', { lat, lng })
            }
            );
        }
    }, [value])

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(post)
  }

  return (
    <div className='container-fluid'>
      <div className="mb-5 bg-light 
      m-auto ">
        <form onSubmit={handleSubmit}>
        <label htmlFor='location'>Location</label><br />
                            <GooglePlacesAutocomplete
                                selectProps={{
                                    value,
                                    onChange: setValue,
                                }} />
          <br />
          <br />
          <div className='mb-3'>
          <label className='form-label' htmlFor="post">Post : </label>
          <input className=' form-control ' type="text" name="post" onChange={handleChange} />
          <br />
          <br />
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor="date">date : </label> <br></br>
          <input className=' form-control ' type="date" name="date" onChange={handleChange} />
          <br></br>
          </div>
          <div className='mb-3'>
          <label className='form-label' htmlFor="img">Image : </label>
          <input className=' form-control ' type="text" name="img" onChange={handleChange} />
          <br></br>
          </div>
          <input className='btn btn-danger' type="submit" />
        </form>
      </div>
    </div>  
  )
}

export default Add
