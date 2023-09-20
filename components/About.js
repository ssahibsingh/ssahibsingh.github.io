import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import about from "../data/about.js"

import ggeeks from '../public/gaminggeeks-logo.webp'
import soorme from '../public/soorme.webp'

const About = () => {
    return (
        <section className="about py-5" id="about">
            <div className="container">
                <h2 className="section__heading text-center py-5">About Me</h2>
                <div className="row justify-content-center">

                    {about.map((item) => {
                        return (
                            <div key={item.key} className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                                <div className="about__item mx-2 py-4 px-2">
                                    <div className="about__item-img">
                                        <Image
                                            className="img-fluid img-actual"
                                            src={item.img}
                                            alt={item.name}
                                            width={150}
                                            height={150}
                                            styles={{ width: 'auto', height: 'auto' }}
                                        />
                                    </div>
                                    <div className="about__item-content">
                                        <div className="about__item-heading">
                                            <h3>{item.name}</h3>
                                            <div className="about__item-para">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="about__item-details">
                                                {item.h1 ? (
                                                    <>
                                                        <div className="about__item-section-1">
                                                            <h5>{item.h1}</h5>
                                                            <p>{item.h1Array.join(', ')}</p>
                                                        </div>
                                                    </>
                                                ) : (<></>)}
                                                <div className="about__item-section-2">
                                                    <h5>{item.h2}</h5>
                                                    <ul>
                                                        {
                                                            React.Children.toArray(
                                                                item.h2Array.map((item2) => {
                                                                    return (
                                                                        <li>{item2}</li>
                                                                    )
                                                                })
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                {/* <div className="venture">
                    <h3 className="venture__heading text-center py-5">My Ventures</h3>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-6 col-12 py-3">
                                <div className="venture__item">
                                    <div className="venture__item-logo">
                                        <Image
                                            className="img-fluid"
                                            src={ggeeks}
                                            alt="Gaming Geeks"
                                            width={300}
                                            height={49}
                                        />
                                    </div>
                                    <p></p>
                                    <div className="venture__item-about">
                                        <span><Link href="https://ggeeks.github.io" target="_blank" rel="noreferrer" aria-label="Gaming Geeks"><i className="fas fa-external-link-alt"></i>ggeeks.github.io</Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 py-3">
                                <div className="venture__item">
                                    <div className="venture__item-logo">
                                        <Image
                                            className="img-fluid blur"
                                            src={soorme}
                                            alt="Soorme"
                                            width={300}
                                            height={49}
                                        />
                                    </div>
                                    <p></p>
                                    <div className="venture__item-about">
                                        <span><i className="fa-solid fa-code"></i> In development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default About