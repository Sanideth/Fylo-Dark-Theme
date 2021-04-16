import Bonus from "../components/Bonus";
import imgSrc1 from "../img/icon-access-anywhere.svg";
import imgSrc2 from "../img/icon-security.svg";
import imgSrc3 from "../img/icon-collaboration.svg";
import imgSrc4 from "../img/icon-any-file.svg";

const SectionBonuses = () => {
  return (
    <section className="section-bonuses">
      <div className="container">
        <div className="section-bonuses__bonuses">
          <Bonus
            element="h3"
            className="section-bonuses"
            src={imgSrc1}
            alt="Access files anywhere image"
            headingText="Access your files, anywhere"
            headingClassName="tertiary"
            paragraphText="The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
            paragraphClassName="tertiary"
          />
          <Bonus
            element="h3"
            className="section-bonuses"
            src={imgSrc2}
            alt="Security image"
            headingText="Security you can trust"
            headingClassName="tertiary"
            paragraphText="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
            paragraphClassName="tertiary"
          />
          <Bonus
            element="h3"
            className="section-bonuses"
            src={imgSrc3}
            alt="Collaboration image"
            headingText="Real-time collaboration"
            headingClassName="tertiary"
            paragraphText="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
            paragraphClassName="tertiary"
          />
          <Bonus
            element="h3"
            className="section-bonuses"
            src={imgSrc4}
            alt="Any type of file Image"
            headingText="Store any type of file"
            headingClassName="tertiary"
            paragraphText="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
            paragraphClassName="tertiary"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionBonuses;
