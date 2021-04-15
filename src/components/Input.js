const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`${props.className}__input`}
    />
  );
};

export default Input;
