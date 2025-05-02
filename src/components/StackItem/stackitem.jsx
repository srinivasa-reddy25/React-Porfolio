import './stackitem.css'


const StackItem = ({ name, icon }) => {
    return (
        <li className='stackItem'>
            <div className='stackItemIcon'>{icon}</div>
            
            <p className='stackItemName'>{name}</p>
        </li>
    )
}

export default StackItem