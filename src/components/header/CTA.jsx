import React from 'react'
import ShivangiResume from '../../assets/ShivangiSingh_FullStackResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        < a href={ShivangiResume} download className='btn'>Download CV</a>
        < a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA