import logo from "../assets/logo.svg";
import moonIcon from "../assets/icon-moon.svg";
import sunIcon from "../assets/icon-sun.svg";

function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />

      <button
        onClick={toggleTheme}
        className="theme-changer-btn"
        id="toggle-btn"
      >
        <img
          src={isDarkMode ? sunIcon : moonIcon}
          alt="theme toggle icon"
          id="theme-change-icon"
        />
      </button>
    </header>
  );
}

export default Header;
