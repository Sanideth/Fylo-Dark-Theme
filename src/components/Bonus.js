import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph'
import Image from '../components/Image';

const Bonus = (props) => {
    return (
        <div className={`${props.className}__bonus`}>
            <div className={`${props.className}__img-container`}> 
            <Image src={props.src} alt={props.alt}/> 
            </div>
            

            <div className={`${props.className}__text-container`}>
            <Heading element={props.element} className={props.headingClassName} text={props.headingText}/>
            <Paragraph className={props.headingClassName} text={props.paragraphText}/>
            </div>
            
            
        </div>
    )
}


export default Bonus;