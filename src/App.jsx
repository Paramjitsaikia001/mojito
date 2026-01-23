import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navber from './components/Navber'
import Hero from './components/Hero'
import './index.css'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contact from './components/Contact'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
   <main>
    <Navber />
    <Hero />
    <Cocktails/>
    <About/>
    <Art/>
    <Menu/>
    <Contact/>

   </main>
  )
}

export default App