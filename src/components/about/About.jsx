import React from 'react'
import './about.css'
import Me from '../../assets/Me.png'


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          </div>
        </div>

        <div className="about__content">
            <p>
              Hello, Thanks for stopping by.. <br/>
              I'm Shivangi! Full Stack Developer, proficient in working with React and .NET Framework.<br/>
              Creating and Enhancing rich User Interfaces using Bootstrap, Tailwind and JS.<br/>
              I have over 4 years of experience building and maintaining MVC based Web Applications 
              with exposure to complete front/back-end tech stack. <br/>
              When I am not coding, I like reading books, acrylic painting and exploring around..!
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About