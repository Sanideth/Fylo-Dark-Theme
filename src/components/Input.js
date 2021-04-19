const Input = (props) => {
  return (
    <input
      required={props.required}
      type={props.type}
      placeholder={props.placeholder}
      className={`${props.className}__input`}
      aria-label={props.ariaLabel}
      name={props.name}
      aria
    />
  );
};

export default Input;
