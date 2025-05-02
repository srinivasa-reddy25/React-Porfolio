import './index.css'
import StackItem from '../StackItem/stackitem.jsx'
import { FaHtml5, FaPython  } from 'react-icons/fa6';
import { TbBrandCpp } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import { TbLetterC } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiFirebase } from "react-icons/si";
import { SiLangchain } from "react-icons/si";

const languages = [
    {
        name: 'C',
        icon: <TbLetterC />
    },
    {
        name: ' Python',
        icon:<FaPython />
    },
    {
        name: 'C++',
        icon: <TbBrandCpp />
    },
    
    {
        name:'HTML',
        icon: <FaHtml5 />
    },
    {
        name:'CSS',
        icon: <DiCss3 />
    },
    {
        name: 'JavaScript',
        icon: <IoLogoJavascript />
    }
]
const frameworks = [
    {
        name:'langchain',
        icon:<SiLangchain />
    },
    {
        name:'React',
        icon:<FaReact />
    },
    {
        name:'Node.js',
        icon: <FaNodeJs />
    },
    {
        name:'Express.js',
        icon:<SiExpress />
    },
    {
        name:'Tailwind CSS',
        icon:<RiTailwindCssFill />
    },
    {
        name:'Bootstrap',
        icon:<FaBootstrap />
    }
]
const databases = [
    {
        name:'SQLite',
        icon: <DiSqllite />
    },
    {
        name:'firebase',
        icon: <SiFirebase />
    }
]
const Tools=[
    {
        name:'Git',
        icon:<FaGitAlt />
    },
    {
        name:'GitHub',
        icon: <FaGithub />
    },
    {
        name:'VS Code',
        icon:<VscVscode />
    }
]
import StackContainer from '../StackContainer/stackContainer.jsx';


const Skills = () => {
    return (
        <div className='Stack'>
            <div className='StackHeader'>
                <h1 className='StackHeading'>My Stack</h1>
                <p className='StackDescription'>Peek into my software toolbox and preferred technology stacks</p>
            </div>
            
            <div className='stacksConatiner'>
                <StackContainer title='Languages' stackitems={languages} />
                <StackContainer title='Frameworks & Libraries' stackitems={frameworks} />
                <StackContainer title='Databases' stackitems={databases} />
                <StackContainer title='Tools' stackitems={Tools} />
            </div>
        </div>
    )
}

export default Skills