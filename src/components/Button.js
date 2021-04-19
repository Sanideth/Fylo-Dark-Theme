import { ReactComponent as IconArrow } from "../img/icon-arrow.svg";
import Icon from "../components/Icon";

const Button = (props) => {
  const renderSpan = props.withDiv ? (
    <div className="button-div">
      <Icon src={<IconArrow />} />
    </div>
  ) : null;

  return (
    <>
      {props.type === "form" ? (
        <button className={`btn ${props.className}`} type="submit">
          {props.text}
        </button>
      ) : (
        <a
          href="https://github.com/Sanideth"
          className={`btn ${props.className}`}
        >
          {props.text}
          {renderSpan}
        </a>
      )}
    </>
  );
};

export default Button;
