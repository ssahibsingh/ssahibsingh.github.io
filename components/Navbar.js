import { useRef, useState } from "react";
// import Button from "@cred/neopop-web/lib/components/Button";
import { Button } from '@cred/neopop-web/lib/components';
import Link from "next/link";

const Navbar = () => {
    const [isOver, setIsOver] = useState(false);
    const navButton = useRef(null);
    const linksContainerRef = useRef(null);

    function collapseNav() {
        navButton.current.classList.add("collapsed");
        linksContainerRef.current.classList.remove("show");
    }

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
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container-fluid">
                <div className="navbar-brand d-flex align-items-center mx-3 pt-3">
                    <h1>
                        <Link onClick={collapseNav} className="text-decoration-none" href="/" aria-label="Logo">
                            Sahib Singh
                        </Link>
                    </h1>
                </div>
                <button
                    ref={navButton}
                    className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* <span className="navbar-toggler-icon"></span> */}

                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div
                    ref={linksContainerRef}
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <Link onClick={collapseNav} className="nav-link px-3" href="#home" aria-label="Home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={collapseNav} className="nav-link px-3" href="#about" aria-label="About">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={collapseNav}
                                className="nav-link px-3"
                                href="#project"
                                aria-label="Projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={collapseNav} className="nav-link px-3" href="#skill" aria-label="Skills & Experiences">
                                Skills & Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={collapseNav}
                                className="nav-link px-3"
                                href="#education"
                                aria-label="Education"
                            >
                                Education
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={collapseNav}
                                className="nav-link px-3"
                                href="#contact"
                                aria-label="Contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/resume.pdf"
                                onClick={collapseNav}
                                className="text-decoration-none navbar-nav-btn"
                                target="_blank"
                                rel="noreferrer"
                                onMouseOver={() => {
                                    setIsOver(true);
                                }}
                                onMouseOut={() => {
                                    setIsOver(false);
                                }}
                                aria-label="Resume"
                            >
                                <Button
                                    className={isOver && "active"}
                                    colorConfig={colorConfig}
                                    variant="primary"
                                    kind="elevated"
                                    size="medium"
                                    colorMode="dark"
                                >
                                    Get Resume
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    href="/resume.pdf"
                    onClick={collapseNav}
                    className="text-decoration-none navbar-btn"
                    target="_blank"
                    rel="noreferrer"
                    onMouseOver={() => {
                        setIsOver(true);
                    }}
                    onMouseOut={() => {
                        setIsOver(false);
                    }}
                    aria-label="Resume"
                >
                    <Button
                        className={isOver && "active"}
                        colorConfig={colorConfig}
                        variant="primary"
                        kind="elevated"
                        size="medium"
                        colorMode="dark"
                    >
                        Get Resume
                    </Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
