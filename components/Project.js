import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import projectData from '../data/project'
import { Button } from '@cred/neopop-web/lib/components'

const Project = () => {
    const { project, otherProjects } = projectData

    const [projectCount, setProjectCount] = useState(9)

    const [isOver, setIsOver] = useState(false);

    const colorConfig = {
        backgroundColor: 'var(--primary)',
        borderColor: 'var(--secondary)',
        edgeColors: {
            left: 'transparent',
            top: 'transparent',
            right: 'var(--black)',
            bottom: 'var(--black)'
        },
        color: 'var(--black)'
    }

    return (
        <>
            <section id="project" className="project">
                <div className="container">
                    <h2 className="section__heading">Projects</h2>
                    <div className="project__display">
                        <div className="row justify-content-center">
                            {project.map((item, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 ">
                                        <div className="project__item comp">
                                            <div className="project__item-img">
                                                <Image
                                                    className="img-fluid img-actual"
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>
                                            <div className="project__item-about">
                                                <div className="project__name">
                                                    <h3 >{item.name}</h3>
                                                </div>
                                                <div className="project__item-about-content">
                                                    <p>{item.description}</p>

                                                    {item.techStack && (
                                                        <>
                                                            <div className="project__item-about-tech">
                                                                <h5>Tech Stack</h5>
                                                            </div>
                                                            <ul>
                                                                {item.techStack.map((tech, index) => {
                                                                    return <li key={index}>{tech}</li>
                                                                })}
                                                            </ul>
                                                        </>
                                                    )}

                                                    {item.components && (
                                                        <>
                                                            <div className="project__item-about-tech">
                                                                <h5>Components</h5>
                                                            </div>
                                                            <ul>
                                                                {item.components.map((tech, index) => {
                                                                    return <li key={index}>{tech}</li>
                                                                })}
                                                            </ul>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="project__item-links">
                                                    {item.complete ? (
                                                        <>
                                                            <div className='d-flex gap-2'>
                                                                {item.liveDeploy && (
                                                                    <div className="project__item-links-item live">
                                                                        <Link href={item.liveDeploy} target="_blank" rel="noreferrer" aria-label="Live Deployment">Live Deployment <i className="fas fa-external-link-alt"></i></Link>
                                                                    </div>
                                                                )}

                                                                {item.sourceCode && (
                                                                    <div className="project__item-links-item code">
                                                                        <Link href={item.sourceCode} target="_blank" rel="noreferrer" aria-label="Source Code">{item.sourceCodeName} <i className="fa-brands fa-github"></i></Link>
                                                                    </div>
                                                                )}

                                                                {item.sourceCode2 && (
                                                                    <div className="project__item-links-item code">
                                                                        <Link href={item.sourceCode} target="_blank" rel="noreferrer" aria-label="Source Code">{item.sourceCodeName2} <i className="fa-brands fa-github"></i></Link>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="project__item-links-item code">
                                                                In Development <i className="fa-solid fa-code"></i>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="project__other">
                            <div className="project__other-heading">
                                <h3>Other Projects</h3>
                            </div>
                            <div className="row justify-content-center">
                                {
                                    React.Children.toArray(
                                        otherProjects.slice(0, projectCount).map(({ link, img }) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 py-3 text-center">
                                                        <Link target="_blank" rel="noreferrer" href={link} aria-label={Link}>
                                                            <Image
                                                                className="img-fluid img-actual"
                                                                src={img}
                                                                alt=""
                                                                width={400}
                                                                height={120}
                                                            />
                                                        </Link>
                                                    </div>
                                                </>
                                            )
                                        })
                                    )
                                }

                            </div>
                            <div className='text-center'>
                                {projectCount === otherProjects.length ? (<></>) :
                                    (
                                        <>
                                            <Button
                                                onMouseOver={() => { setIsOver(true) }}
                                                onMouseOut={() => { setIsOver(false) }}
                                                colorConfig={colorConfig}
                                                className={isOver && "active"}
                                                variant="primary"
                                                kind="elevated"
                                                size="medium"
                                                colorMode="dark"
                                                onClick={() => setProjectCount(otherProjects.length)}
                                            >
                                                Load More
                                            </Button>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project