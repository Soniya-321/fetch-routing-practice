// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {id, author, title, imageUrl, avatarUrl, topic} = blogsList
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item">
        <img src={imageUrl} alt={`item${id}`} className="img" />
        <div className="text">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-con">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
