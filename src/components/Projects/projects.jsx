import './index.css'
import {v4 as uuid} from 'uuid'
import ProjectsItem from '../ProjectsItem/projectsitem.jsx'
import techshop from '../../assets/techshop.png'
import weather from '../../assets/weather.png'
import calculator from '../../assets/calculator.png'
import foodmunch from '../../assets/foodmunch.png'
import techtrends from '../../assets/techtrends.png'

let ProjectsData=[
    {
        id:'1',
        title:'TechShop',
        description:'This is a tech shop website where you can buy tech products. It is built using React',
        image:techshop,
        link:'https://techshop.niat.tech/',
        gitgublink:'https://github.com/srinivasa-reddy25/Shopping-cart',
        detailedDiscription:'This is a tech shop website where you can buy tech products. It is built using React This is a tech shop website where you can buy tech products. It is built using React This is a tech shop website where you can buy tech products. It is built using React',
        features:[
            'The website has a simple, user-friendly interface for smooth browsing.',
            'Users can add items to the cart, with dynamic updates based on selections.',
            'Built using React components for better scalability and code organization.',
            'The layout adjusts smoothly across devices for a consistent user experience.'
        ],
        technologies:['HTML','CSS','JavaScript','React','Node.js']
    },
    {
        id:'2',
        title:'Weather App',
        description:'This is a weather app where you can check the weather of any city. It is built using React',
        image:weather,
        link:'https://reactwheather.niat.tech/',
        gitgublink:'https://github.com/srinivasa-reddy25/Weather',
        detailedDiscription:'This is a weather app where you can check the weather of any city. It is built using React This is a weather app where you can check the weather of any city. It is built using React This is a weather app where you can check the weather of any city. It is built using React',
        features:[
            'The website has a simple, user-friendly interface for smooth browsing.',
            'Users can add items to the cart, with dynamic updates based on selections.',
            'Built using React components for better scalability and code organization.',
            'The layout adjusts smoothly across devices for a consistent user experience.'
        ],
        technologies:['HTML','CSS','JavaScript','React','Node.js']
    },
    {
        id:'3',
        title:'calculator',
        description:'This is a calculator app where you can perform basic calculations. It is built using JavaScript',
        image:calculator,
        link:'https://javacal.niat.tech/',
        gitgublink:'https://github.com/srinivasa-reddy25/calculator',
        detailedDiscription:'This is a calculator app where you can perform basic calculations. It is built using JavaScript This is a calculator app where you can perform basic calculations. It is built using JavaScript This is a calculator app where you can perform basic calculations. It is built using JavaScript',
        features:[
            'The website has a simple, user-friendly interface for smooth browsing.',
            'Users can add items to the cart, with dynamic updates based on selections.',
            'Built using React components for better scalability and code organization.',
            'The layout adjusts smoothly across devices for a consistent user experience.'
        ],
        technologies:['HTML','CSS','JavaScript']
    }
    ,
    {
        id:'4',
        title:'Food Munch',
        description:'This is a food munch app where you can order food. It is built using HTML and CSS',
        image:foodmunch,
        link:'https://tejar1.niat.tech/',
        gitgublink:'https://github.com/srinivasa-reddy25/FoodMunch',
        detailedDiscription:'This is a food munch app where you can order food. It is built using HTML and CSS This is a food munch app where you can order food. It is built using HTML and CSS This is a food munch app where you can order food. It is built using HTML and CSS',
        features:[
            'The website has a simple, user-friendly interface for smooth browsing.',
            'Users can add items to the cart, with dynamic updates based on selections.',
            'Built using React components for better scalability and code organization.',
            'The layout adjusts smoothly across devices for a consistent user experience.'
        ],
        technologies:['HTML','CSS']
    },
    {
        id:'5',
        title:'Tech Trends',
        description:'This is a tech trends app where you can check the latest tech trends. It is built using HTML and CSS',
        image:techtrends,
        link:'https://futurthink11.niat.tech/',
        gitgublink:'https://github.com/srinivasa-reddy25/first_porfolio',
        detailedDiscription:'This is a tech trends app where you can check the latest tech trends. It is built using HTML and CSS This is a tech trends app where you can check the latest tech trends. It is built using HTML and CSS This is a tech trends app where you can check the latest tech trends. It is built using HTML and CSS',
        features:[
            'The website has a simple, user-friendly interface for smooth browsing.',
            'Users can add items to the cart, with dynamic updates based on selections.',
            'Built using React components for better scalability and code organization.',
            'The layout adjusts smoothly across devices for a consistent user experience.'
        ],
        technologies:['HTML','CSS']
    }
]

export const sendprojects=()=>{
    return ProjectsData
}

const Projects = () => {
    return (
        <div className='projectsContainer'>
            <h1 className='projectsHeading'>Projects</h1>
            <p className='projectsDescription'>Check out some of my recent projects</p>
            <div className='projectsList'>
                {ProjectsData.map((project)=>(
                    <ProjectsItem key={project.id} ProjectsItem={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
