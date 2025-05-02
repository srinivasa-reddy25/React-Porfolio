import './index.css'
import {Link} from 'react-router'
import { MdArrowOutward } from "react-icons/md";

const ProjectsItem = ({ProjectsItem}) => {    
    return (
        <Link to={`/projects/${ProjectsItem.id}`} className='projectsItemLink' >
            <div className='projectsItem'>
                <img className='projectsItemImage' src={ProjectsItem.image} alt="project-Image" />
                <div className='projectsItemDetails'>
                    <div className='projectsItemTitleContainer'>
                        <h1 className='projectsItemTitle'>{ProjectsItem.title}</h1>
                        <MdArrowOutward className='projectsItemArrow'/>
                    </div>
                    
                    <p className='projectsItemDescription'>{ProjectsItem.description}</p>
                    <div className='technologies'>
                        {ProjectsItem.technologies.map((technology, index) => (
                            <span key={index} className='technology'>{technology}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}   

export default ProjectsItem