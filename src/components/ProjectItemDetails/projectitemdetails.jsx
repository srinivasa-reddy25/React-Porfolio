import './index.css'
import { GoGlobe } from "react-icons/go";
import { FaCode } from "react-icons/fa6";
import { useParams } from 'react-router';

import { sendprojects } from '../Projects/projects.jsx'
const ProjectsData=sendprojects()

const ProjectItemDetails = () => {
    const params=useParams()
    const {id} = params
    const {title,description,image,link,detailedDiscription,features,technologies,gitgublink} = ProjectsData[parseInt(id)-1]
    return (
        <div className='projectItemDetails'>
            <div className='projectmaincontainer'>
                <div className='imagecontainer'>
                    <img src={image} alt="" className='projectimage' />
                </div>
                <div className='projectdetails'>
                    <h1 className='projecttitle'>{title}</h1>
                    <p className='projectdescription'>{detailedDiscription}</p>
                    <div className='buttonsConatiner'>
                        <a className='button' href={link} target='_blanck'> <GoGlobe /> View Live</a>
                        <a className='button' href={gitgublink} target='_blanck'> <FaCode /> View Code</a>
                    </div>
                </div>
                
            </div>
            <div className='featuresContainer'>
                <h1 className='featuresHeading'>Features.</h1>
                <ul className='featuresList'>
                    {
                        features.map((feature, index) => (
                            <li key={index} className='featuresItem'>{feature}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='technologiesContainer'>
                <h1 className='technologiesHeading'>Technologies.</h1>
                <ul className='technologiesList'>
                    {
                        technologies.map((technology, index) => (
                            <li key={index} className='technologiesItem'>{technology}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectItemDetails