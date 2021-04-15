const Icon = (props) => {
  return (
    <div className="icon-container">
      {props.link ? (
        <a href="https://github.com/Sanideth" className="icon-link">
          {props.src}
        </a>
      ) : (
        props.src
      )}
    </div>
  );
};

export default Icon;
