import './index.css'

const ListItem = props => {
  const {imageDetails, verifyThumbnail} = props
  const {id, thumbnailUrl} = imageDetails

  const checkImage = () => {
    verifyThumbnail(id)
  }
  return (
    <li className="thumbnail-container">
      <button className="thumbnail-btn" type="button" onClick={checkImage}>
        <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ListItem
