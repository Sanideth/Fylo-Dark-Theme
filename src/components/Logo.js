

const Logo = (props) => {
    return (
        <a href="https://github.com/Sanideth" className={props.linkClassName}>
            <img src={props.src} alt={props.alt} className={props.imgClassName}/>
        </a>
    )
}


export default Logo;