const Post = (props) => {
  return (
    <>
      <div>
        <div>
          <h4>
            <a>{props.post.location}</a>
          </h4>
        </div>
        <img src={props.post.img} />
        <p>{props.post.post}</p>
        <p>{props.post.date}</p>
      </div>
    </>
  )
}

export default Post
