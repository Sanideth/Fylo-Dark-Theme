const Input = (props) => {
  return (
    <input
      required={props.required}
      type={props.type}
      placeholder={props.placeholder}
      className={`${props.className}__input`}
    />
  );
};

export default Input;
