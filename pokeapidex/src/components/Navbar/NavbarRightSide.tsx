import "./Navbar.scss";
import NavbarSearch from "./NavbarSearch";

const NavbarRightSide = () => {
  return (
    <div className="navbar-right-container">
      <NavbarSearch />
      <div className="dropdown-container"></div>
    </div>
  );
};

export default NavbarRightSide;
