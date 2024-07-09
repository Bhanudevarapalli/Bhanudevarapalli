import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const clickTab = () => {
    clickTabItem(tabId)
  }
  const activeBtnClassName = isActive ? 'item-selected-btn' : 'item-btn'
  return (
    <li className="list-tab-items">
      <button
        type="button"
        className={`item-btn ${activeBtnClassName}`}
        onClick={clickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
