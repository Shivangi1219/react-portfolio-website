import React from 'react'
import './portfolio.css'
import PortfolioImage3 from '../../assets/Portfolio-3.png'
import PortfolioImage1 from '../../assets/Portfolio-1.png'
import PortfolioImage2 from '../../assets/Portfolio-2.png'
import PortfolioImage4 from '../../assets/Portfolio-4.png'
import PortfolioImage5 from '../../assets/Natours.jpg'
import PortfolioImage6 from '../../assets/Portfolio-6.png'
import PortfolioImage7 from '../../assets/Trillo.jpg'

const data = [

  {
    id: 5,
    title : 'Natours guide',
    image : PortfolioImage5,
    github : 'https://github.com/Shivangi1219/Natours_css',
    demo : 'https://tour-guide-natour.netlify.app/'
  },
  {
    id: 7,
    title : 'Trillo',
    image : PortfolioImage7,
    github : 'https://github.com/Shivangi1219/Trillo',
    demo : 'https://trillo-review.netlify.app/'
  },
  {
    id: 4,
    title : 'Airbnb Clone',
    image : PortfolioImage4,
    github : 'https://github.com/Shivangi1219/Airbnb-Clone',
    demo : 'https://airbnbclone19.netlify.app/'
  },
  
  {
    id: 1,
    image: PortfolioImage1,
    title : 'Tenzies Game',
    github : 'https://github.com/Shivangi1219/Tenzies-Game',
    demo : 'https://tenzies-game-5.netlify.app/'
  },
  {
    id: 2,
    image : PortfolioImage2,
    title : 'Wildlife Conservation website',
    github : 'https://github.com/Shivangi1219/Wildlife-Conservatory',
    demo : 'https://wildlife-conservatory.netlify.app/'
  },
  {
    id: 3,
    image : PortfolioImage3,
    title : 'Meme Generator',
    github : 'https://github.com/Shivangi1219/Meme-Generator',
    demo : 'https://meme-generator-12.netlify.app/'
  },
  
  {
    id: 6,
    title : 'Landing page designed in photoshop',
    image : PortfolioImage6,
    github : 'https://github.com/Shivangi1219/Landing-Page-in-Photoshop',
    demo : ''
  },

]

const Portfolio = () => {
  return (

    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
         data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="Portfolio Image"/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio