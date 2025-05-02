import './stackContainer.css'

import StackItem from '../StackItem/stackitem.jsx'

const StackContainer = ({ title, stackitems }) => {
    return (
        <div className='stackContainer'>
            <h2 className='stackContainerTitle'>{title}</h2>
            <ul className='stackContainerList'>
                {stackitems.map((stackitem, index) => (
                    <StackItem key={index} name={stackitem.name} icon={stackitem.icon} />
                ))}
            </ul>
        </div>
    )
}
export default StackContainer