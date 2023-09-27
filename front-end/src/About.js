import { Link } from 'react-router-dom'
import Picture from './me.jpg'
import './About.css'
import Header from './Header'
import Footer from './Footer'

const About = props => {
    return (
        <>
        <h1>About Us</h1>
        <p>Hi, I'm Athena! I'm a senior at CAS studying CS, with double minors in Business Studies, and Web Development and Applications. 
            I was born in Kansas, grew up in South Carolina, and now am a proud Floridian. If I'm home in Orlando, I'm usually hitting all the parks at Disney or hanging out with my two younger siblings.
            The last time I went back to Florida was late August, but it was only for a short time so I'm hoping I can go back for longer next time.
        </p>
        <br></br>
        <img src={Picture} alt="me" width="300px"/>
        <br></br>
        <p>
        When I'm not studying at Bobst, I'm grabbing a Spanish latte from %arabica or attending kpop concerts. I can also be found watching movies to review on Letterboxd.
            I love traveling so I hope in the future that I'll be able to visit Korea, Japan, and go home to Malaysia and Singapore. I was supposed to go on an extended vacation to all of these countries and more, but since COVID happened,
            I haven't been able to. Currently, I'm really into the Pride and Prejudice (2005) movie, WHERE SHE GOES by Bad Bunny, and the new EP by D.O. 
            
        </p>
        </>
    )
}

export default About
