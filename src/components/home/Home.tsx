import { useState } from 'react'
import Hero from './sections/hero/Hero'
import FullScreenBackground from './styledBackground/FullScreenStyledBackground'

const Home = () => {

  return (
    <>
      <FullScreenBackground/>
      <Hero/>
    </>
  )
}

export default Home
