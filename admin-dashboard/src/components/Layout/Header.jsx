import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <button
              type="button"
              onClick={() => {
                console.log('toggle')
              }}
              className="btn btn-sm px-3 font-size-16 header-item"
              id="vertical-menu-btn"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
          </div>
          <div className="header-navigation">
            <FontAwesomeIcon icon="fa-solid fa-sun-bright" />
            <FontAwesomeIcon icon="fa-solid fa-user" className="p-1"/>
            <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
