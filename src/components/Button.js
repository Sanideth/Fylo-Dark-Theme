const Button = (props) => {
  return (
    <a href="https://github.com/Sanideth" className={`btn ${props.className}`}>
      {props.text}
    </a>
  );
};

export default Button;
