import './index.css'
import { FaGithub, FaLinkedin, FaXTwitter, FaSquareInstagram } from 'react-icons/fa6';

const Home=()=>{
    return(
        <div className='home'>
            <div className='homeImage'>
                <div className='homeImageOverlay'>
                    <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200' alt='Profile' className='profileImage'/>
                </div>  
            </div>
            <div className='homeContent'>
                <h1 className='homeGreeting'>Hello, It's Me</h1>
                <h1 className='homeName'>Srinivasa Reddy</h1>
                <p className='homeRole'>I'm a <span className='homeRoleSpan'>Frontend Developer</span></p>
                <p className='homeDescription'>I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. </p>
                <div className='homeSocialLinks'>
                    <a href="https://github.com/srinivasa-reddy25" target="_blank" >
                        <FaGithub className='socialIcon'/>
                    </a>
                    <a href="https://linkedin.com/in/srinivasa-reddy-medam" target="_blank" >
                        <FaLinkedin className='socialIcon'/>
                    </a>
                    <a href="https://x.com/Medamsrinivas25" target="_blank" >
                        <FaXTwitter className='socialIcon'/>
                    </a>
                    <a href="https://www.instagram.com/medamsrinivas25" target="_blank" >
                        <FaSquareInstagram className='socialIcon'/>
                    </a>
                </div>
                <button className='homeButton'>Download Resume</button>
            </div>
        </div>
    )
}

export default Home