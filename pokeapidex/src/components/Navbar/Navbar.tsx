import pokeapiLogo from "@/assets/pokeapilogo.png";
import "./Navbar.scss";
import NavbarRightSide from "./NavbarRightSide";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="image-container">
        <img alt="pokeapi-logo" src={pokeapiLogo} className="navbar-logo" />
      </div>
      <NavbarRightSide />
    </div>
  );
};

export default Navbar;
