import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <p className={`${props.className}__paragraph`}>{props.text}</p>
      <div className="user-container">
        <div className="img-container">
          <Image
            src={props.src}
            alt={props.alt}
            className={`${props.className}__img`}
          />
        </div>
        <div className="text-container">
          <Paragraph text={props.textName} className={props.userClassName} />
          <Paragraph
            text={props.textCredentials}
            className={props.credentialsClassName}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
