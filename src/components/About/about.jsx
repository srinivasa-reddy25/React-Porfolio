import './index.css'
import AboutMeItems from '../AboutMeItems/aboutmeitems.jsx'


const AboutMeData=[
    {
        id:'1',
        title:'Summary',
        points:[
            'Hi, I\'m Srinivasa Reddy, I\'m student at NIAT',
            'Currently learning MERN stack'
        ]
    },
    {
        id:'2',
        title:'Education',
        points:[
            'I completed my schooling from Gomathy High school in 2022',
            'I am currently pursuing my B.Sc in Computer Science from Bits'
        ]
    },
    {
        id:'3',
        title:'Interests',
        points:[
            'Intrested exploring new things in Generative AI',
            'Intrested in learning in Full Stack Development'
        ]
    },
    {
        id:'4',
        title:'Experience',
        points:[
            'In free time I like to sleep',
            'Sometimes I like to watch movies,make fun of my friends.'
        ]
    }
]

const About=()=>{
    return(
        <div className='aboutContainer'>
            <div className='aboutContent'>
                <h1 className='aboutHeading'>About Me.</h1>
                <p className='aboutDescription'>Get to know me better - my story, interests, and aspirations.</p>
            </div>
            <div className='aboutDetails'>
                {AboutMeData.map((item)=>(
                    <AboutMeItems title={item.title} description={item.points} key={item.id}/>
                ))}
                {/* <AboutMeItems title={AboutMeData[0].title} description={AboutMeData[0].points}/> */}
            </div>
        </div>
    )
}

export default About
