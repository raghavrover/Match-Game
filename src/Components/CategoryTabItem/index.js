import './index.css'

const CategoryTabItem = props => {
  const {tabItem, updateTabId, isActiveTabId} = props
  const {displayText, tabId} = tabItem

  const getNewTabId = () => {
    updateTabId(tabId)
  }

  const customStyle = isActiveTabId ? 'selected-tab' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={getNewTabId}
        className={`tab-item ${customStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default CategoryTabItem
