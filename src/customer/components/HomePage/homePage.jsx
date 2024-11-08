import React from 'react'
import MainCarousel from '../HomeCarousel/mainCarousel'
import HomeSectionCarosel from '../HomeSectionCarousel/homeSectionCarousel'

const homePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div>
        <HomeSectionCarosel/>
      </div>
    </div>
  )
}

export default homePage
