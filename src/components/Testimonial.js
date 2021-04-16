import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

const Testimonial = (props) => {
  return (
    <div className={`${props.className}__testimonial`}>
      <p className={`${props.className}__paragraph`}>{props.text}</p>
      <div className={`${props.className}__user-container`}>
        <div className={`${props.className}__img-container`}>
          <Image src={props.src} alt={props.alt} className={props.className} />
        </div>
        <div className={`${props.className}__text-container`}>
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
