import {Component} from 'react'
import './index.css'
class DestinationSearch extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <input type="search" placeholder="Search" className="search-icon" src = "https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt = "search icon"/>
      </div>
    )
  }
}
export default DestinationSearch
