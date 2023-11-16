import NavbarSearchInput from "./NavbarSearchInput";
import "./Navbar.scss";

const NavbarRightSide = () => {
  return (
    <div className="navbar-right-container">
      <NavbarSearchInput />
      <div className="dropdown-container"></div>
    </div>
  );
};

export default NavbarRightSide;
