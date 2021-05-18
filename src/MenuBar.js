import { IoMoonOutline } from "react-icons/io5";
function MenuBar({changeMode,lightMode}) {

  return (
    <div className={lightMode? "menu-wrapper light-mode-element" : "menu-wrapper dark-mode-element"}>
      <h3>Where in the world?</h3>
      <div className="menu-wrapper-mode" onClick={changeMode}>
        <IoMoonOutline size={20} />
  <h3>{lightMode? "Night Mode": "Light Mode"}</h3>
      </div>
    </div>
  );
}

export default MenuBar;
