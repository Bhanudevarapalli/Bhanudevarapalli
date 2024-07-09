import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <li className="items">
      <div className="card-container">
        <img
          src={imageUrl}
          alt={`app-item-image ${appId}`}
          className="app-item-image"
        />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
