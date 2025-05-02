import './index.css'
// import emailjs from 'emailjs-com';
import { useState } from 'react'

const Contact=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')

    const onClickingSubmit=(e)=>{
        e.preventDefault()
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return(
        <div className='contactContainer'>
            <div className='contactContent'>
                <h1 className='contactHeading'>
                    Reach Me Out.
                </h1>
                <p className='contactDescription'>Let's discuss how I can help you</p>
            </div>
            <form className='contactForm' >
                <div className='contactInputs'>
                    <input type="text" placeholder='Your Name' className='contactInput' id='name' onChange={(e)=>setName(e.target.value)} value={name}/>
                    <input type="email" placeholder='Your Email' className='contactInput' id='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
                <input type="text" placeholder='Your Subject' className='subjectInput' id='subject' onChange={(e)=>setSubject(e.target.value)} value={subject}/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message' className='contactTextarea' onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                <button className='contactButton' id='submit' onClick={onClickingSubmit} type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact