import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navber from './components/Navber'
import Hero from './components/Hero'
import './index.css'
import Cocktails from './components/Cocktails'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
   <main>
    <Navber />
    <Hero />
    <Cocktails/>
   </main>
  )
}

export default App