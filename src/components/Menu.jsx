import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { allCocktails } from '../constant'
import { useGSAP } from '@gsap/react'

const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const total = allCocktails.length
    const goToNext = (index) => {
        const newIndex = (index + total) % total

        setCurrentIndex(newIndex)
    }

    const getCurrentIndex = (indexoffset) => {
        return allCocktails[(currentIndex + indexoffset + total) % total]
    }
    const currentCocktail = getCurrentIndex(0)
    const prevCocktail = getCurrentIndex(-1)
    const nextCocktail = getCurrentIndex(1)

    const contentRef = useRef()

    useGSAP(() => {
        gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 })
        gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" })
        gsap.fromTo(".details h2", { opacity: 0, yPercent: 100 }, { opacity: 100, yPercent: 0, ease: "power1.inOut" })
        gsap.fromTo(".details p", { opacity: 0, yPercent: 100 }, { opacity: 100, yPercent: 0, ease: "power1.inOut" })
    }, [currentIndex])

    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#menu",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        })

        tl
        .to("#m-left-leaf",{y:-200},0)
        .to("#m-right-leaf",{y:200},0)
    })


    return (
        <section id='menu' aria-labelledby='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />



            <h2 className="sr-only" id='menu-heading'>Cocktail Menu</h2>

            <nav className="cocktail-tabs" aria-label='cocktail Navigation'>

                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex

                    return (
                        <button
                            key={cocktail.id}
                            className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
                            onClick={() => goToNext(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}

            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => { goToNext(currentIndex - 1) }}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    <button className="text-right" onClick={() => { goToNext(currentIndex + 1) }}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} alt="object-contain" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">
                            {currentCocktail.name}
                        </p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Menu