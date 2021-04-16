import src from "../img/logo.svg";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Image from "../components/Image";
import imageSrc from "../img/illustration-intro.png";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

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
        <div className="header__intro">
          <div className="header__img-container">
            <Image className="header" src={imageSrc} alt="Intro Image" />
          </div>
          <div className="header__text-container">
            <Heading
              element="h1"
              className="primary"
              text="All your files in one secure location, accessible anywhere."
            />
            <Paragraph
              className="primary"
              text="Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers."
            />
          </div>
          <div className="header__button-container">
            <Button text="Get Started" className="btn-primary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
