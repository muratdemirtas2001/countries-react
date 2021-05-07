import { FaMoon } from "react-icons/fa";
function MenuBar() {
  return (
    <div className="menu-wrapper">
      <h3>Where in the world?</h3>
      <div className="menu-wrapper-mode">
        <FaMoon size={20} />
        <h3>Night mode</h3>
      </div>
    </div>
  );
}

export default MenuBar;
