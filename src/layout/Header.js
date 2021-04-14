import src from "../img/logo.svg";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

const HEADER_NAV_ARRAY = ["Features", "Team", "Sign In"];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo-container">
            <Logo
              src={src}
              alt="Main Logo"
              imgClassName="logo"
              linkClassName="logo-link"
            />
          </div>
          <div className="header__nav-container">
            <Nav arr={HEADER_NAV_ARRAY} className="header" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
