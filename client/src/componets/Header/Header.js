import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdownToggle() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/">Home</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/chats">Chats</Link>
        </div>
        <div className="header-right">
          <div className="dropdown">
            <button
              className="dropdown-btn"
              onClick={handleDropdownToggle}
              onBlur={() => setShowDropdown(false)}
            >
              Link 3
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-link">
                  Dropdown Link 1
                </Link>
                <Link to="/" className="dropdown-link">
                  Dropdown Link 2
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;