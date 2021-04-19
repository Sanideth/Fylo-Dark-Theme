import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import Icon from "../components/Icon";
import Nav from "../components/Nav";
import logoSrc from "../img/logo.svg";
import { ReactComponent as IconLocation } from "../img/icon-location.svg";
import { ReactComponent as IconPhone } from "../img/icon-phone.svg";
import { ReactComponent as IconEmail } from "../img/icon-email.svg";
import { ReactComponent as IconFacebook } from "../img/facebook.svg";
import { ReactComponent as IconTwitter } from "../img/twitter.svg";
import { ReactComponent as IconInstagram } from "../img/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box-container">
        <div className="container">
          <div className="footer__box">
            <div className="footer__box-text-container">
              <Heading
                element="h2"
                text="Get early access today"
                className="footer"
              />
              <Paragraph
                text="It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you."
                className="footer"
              />
            </div>
            <form
              action="#"
              onSubmit="return false"
              className="footer__box-form"
            >
              <div className="footer__input-container">
                <Input
                  className="footer"
                  type="email"
                  placeholder="example@fylo.com"
                  required={true}
                  ariaLabel="Email Input"
                />
                <div className="required">
                  Please enter a valid email address
                </div>
              </div>
              <div className="footer__button-container">
                <Button
                  text="Get Started For Free"
                  className="btn-form"
                  type="form"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__details">
        <div className="container">
          <div className="footer__logo-container">
            <Logo src={logoSrc} alt="Main Logo" />
          </div>
          <div className="footer__about">
            <div className="footer__info">
              <div className="footer__location">
                <Icon src={<IconLocation />} />
                <Paragraph
                  className="location"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua"
                />
              </div>
              <div className="footer__contact">
                <div className="footer__phone">
                  <Icon src={<IconPhone />} />
                  <Paragraph className="phone" text="+1-543-123-4567" />
                </div>
                <div className="footer__email">
                  <Icon src={<IconEmail />} />
                  <Paragraph className="email" text="example@fylo.com" />
                </div>
              </div>
            </div>
            <div className="footer__navigation">
              <Nav
                className="footer"
                arr={[
                  "About us",
                  "Contact Us",
                  "Jobs",
                  "Terms",
                  "Press",
                  "Privacy",
                  "Blog",
                ]}
              />
              <div className="footer__social">
                <Icon src={<IconFacebook />} link={true} />
                <Icon src={<IconTwitter />} link={true} />
                <Icon src={<IconInstagram />} link={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
