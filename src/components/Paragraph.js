


const Paragraph = (props) => {
    return (
        <p className={`paragraph-${props.className}`}>{props.text}</p>
    )
}


export default Paragraph;