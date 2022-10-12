import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
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
      </div>
    </header>
  )
}

export default Header;
