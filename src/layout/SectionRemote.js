import Image from "../components/Image";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import src from "../img/illustration-stay-productive.png";

const SectionRemote = () => {
  return (
    <section className="section-remote">
      <div className="container">
        <div className="section-remote__img-container">
          <Image
            src={src}
            alt="Work remotely image"
            className="section-remote"
          />
        </div>
        <div className="section-remote__text-container">
          <Heading
            element="h2"
            text="Stay productive, wherever you are"
            className="secondary"
          />
          <Paragraph
            text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs."
            className="secondary"
          />
          <Paragraph
            text="Securely share files and folders with friends, family and colleagues for live collaboration. No email 
          attachments required."
            className="secondary"
          />
          <Button text="See how Fylo works" withSpan={true} />
        </div>
      </div>
    </section>
  );
};

export default SectionRemote;
