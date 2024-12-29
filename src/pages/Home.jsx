import React from 'react'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import PopularProducts from '../components/PopularProducts'

const Home = () => {
  return (
    <>
      <Hero/>
      <NewArrivals/>
      <PopularProducts />
      <Features/>
      <Footer/>
    </>
  )
}

export default Home