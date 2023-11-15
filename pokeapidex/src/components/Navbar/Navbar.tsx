import pokeapiLogo from "@/assets/pokeapilogo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img alt="pokeapi-logo" src={pokeapiLogo} />
    </div>
  );
};

export default Navbar;
