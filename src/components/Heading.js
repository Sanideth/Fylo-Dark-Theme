

const Heading = (props) => {
    const Element = `${props.element}`
    return (
        <Element className={`heading-${props.className}`}>{props.text}</Element>
    )
}



export default Heading;