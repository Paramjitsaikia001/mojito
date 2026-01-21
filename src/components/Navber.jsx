import React from 'react'
import gsap from 'gsap'
import { Navlinks } from '../constant/index'
import { useGSAP } from '@gsap/react'
const Navber = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top"
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
           });
       

}, [])

return (
    <nav>
        <div>
            <a
                className='flex items-center gap-2'
                href="#home">
                <img src="/images/logo.png" alt="logo" />
                <p>Velvet Pours</p>
            </a>
            <ul>
                {Navlinks.map((links) => (
                    <li key={links.id}>
                        <a href={`#${links.id}`}>
                            {links.title}

                        </a>

                    </li>

                ))}
            </ul>
        </div>
    </nav>
)
}

export default Navber