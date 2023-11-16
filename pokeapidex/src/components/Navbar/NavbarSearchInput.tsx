import "./Navbar.scss";
import { IoSearchCircle } from "react-icons/io5";

const NavbarSearchInput = () => {
  return (
    <div className="navbar-right-search-container">
      <label htmlFor="search-input" className="search-input-label">
        <input
          name="search-input"
          className="navbar-search-input"
          type="text"
          placeholder="Type a pokemon name..."
        />
        <IoSearchCircle className="search-input-icon" />
      </label>
    </div>
  );
};

export default NavbarSearchInput;
