import './index.css'

const ProjectsItem = ({ProjectsItem}) => {
    return (
        <div className='projectsItem'>
            <img className='projectsItemImage' src={ProjectsItem.image} alt="" />
            <div className='projectsItemDetails'>
                <h1 className='projectsItemTitle'>{ProjectsItem.title}</h1>
                <p className='projectsItemDescription'>{ProjectsItem.description}</p>
                <div className='technologies'>
                    {ProjectsItem.technologies.map((technology, index) => (
                        <span key={index} className='technology'>{technology}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}   

export default ProjectsItem