import './index.css';
import { Link } from 'react-router';

const Navbar=()=>{
    return(
        <div className="navbar">
            <ul className="navLinks">
                <li>
                    <Link to="/" className='link active'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className=' link active'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className='link active'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/Skills" className='link active'>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" className='link active'>
                    Contact
                    </Link>
                </li>
            </ul> 
        </div>
    )
}

export default Navbar


{/* <ul className='underline'>
                <li className='underline1'></li>
                <li className='underline2'></li>
                <li className='underline3'></li>
                <li className='underline4'></li>
                <li className='underline5'></li>
            </ul>            */}
