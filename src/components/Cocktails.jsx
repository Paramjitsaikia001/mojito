import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constant'

const Cocktails = () => {

    useGSAP(() => {
        const lt = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true
            }
        })
        lt.from("#c-left-leaf", {
                x: -100,
                y: 100
            }).from("#c-right-leaf", {
                x: 100,
                y: 100
            })




    })

    return (
        <section id='cocktails' className='noisy'>
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />

            <div className="list">
                <div className="popular">
                    <h2>Most Popular Cocktails:</h2>
                    <ul>
                        {
                            cocktailLists.map(({ name, country, price, details }) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {details}</p>
                                    </div>
                                    <span>-{price}</span>
                                </li>
                            ))

                        }
                        <li>

                        </li>
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most Loved mocktails:</h2>
                    <ul>
                        {
                            mockTailLists.map(({ name, country, price, details }) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>{country} | {details}</p>
                                    </div>
                                    <span>-{price}</span>
                                </li>
                            ))

                        }
                        <li>

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails