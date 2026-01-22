import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navber from './components/Navber'
import Hero from './components/Hero'
import './index.css'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
   <main>
    <Navber />
    <Hero />
    <Cocktails/>
    <About/>
    <Art/>
   </main>
  )
}

export default App