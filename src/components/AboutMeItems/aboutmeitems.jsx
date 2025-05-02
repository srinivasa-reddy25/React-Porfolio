import './index.css'

const AboutMeItems = ({ title, description }) => {
    console.log(description)
    return (
        <div className='aboutMeItem'>
            <h1 className='aboutMeItemTitle'>{title}</h1>
            <ul className='aboutMeItemDescription'>
                {description.map((point, index) => (
                    <li key={index} className='aboutMeItemPoint'>{point} </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutMeItems