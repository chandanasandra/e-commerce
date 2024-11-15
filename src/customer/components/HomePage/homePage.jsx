import React from 'react'
import MainCarousel from '../HomeCarousel/mainCarousel'
import HomeSectionCarosel from '../HomeSectionCarousel/homeSectionCarousel'
import TrendingProducts from '../HomeSectionCarousel/trendingProducts'

const homePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div>
        <TrendingProducts/>
      </div>
      <div>
        <HomeSectionCarosel/>
      </div>
    </div>
  )
}

export default homePage
