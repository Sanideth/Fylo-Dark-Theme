import { ReactComponent as IconArrow } from "../img/icon-arrow.svg";
import Icon from "../components/Icon";

const Button = (props) => {
  const renderSpan = props.withSpan ? (
    <span className="button-span">
      <Icon src={<IconArrow />} />
    </span>
  ) : null;
  return (
    <>
      <a
        href="https://github.com/Sanideth"
        className={`btn ${props.className}`}
      >
        {props.text}
        {renderSpan}
      </a>
    </>
  );
};

export default Button;
