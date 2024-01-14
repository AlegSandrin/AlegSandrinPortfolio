/* eslint-disable react/prop-types */
export default function Icon({link, image, alt, className}) {
    return (
        <a href={link} target="_blank" rel="noreferrer"> 
            <img src={image} alt={alt} width="40" height="40" className={`${className} h-full icon`}/> 
        </a> 
    )
}