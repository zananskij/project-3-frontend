const Post = (props) => {
  return (
    <>
      <div className="card text-center" style={{ width: '45rem' }}>
        <div>{props.post.location}</div>
        <img src={props.post.img} />
        <p>{props.post.post}</p>
        <p>{props.post.date}</p>
      </div>
    </>
  )
}

export default Post
