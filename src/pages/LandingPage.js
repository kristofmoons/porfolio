import {useEffect, useState} from "react";
import {Skills} from "../components/Skills";

function ScrollDownSection() {
    function scroll() {
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0, document.body.scrollHeight);
    }

    return (
        <section id="ScrollDown" className="demo mt-5 pt-5">
            <button onClick={scroll}><span/>Scroll</button>
        </section>
    );
}

export default function LandingPage() {

    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("auto") : setnavSize("8rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <>

            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top"
                     style={{backgroundColor: navColor, height: navSize, transition: "all 1s"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <header/>
            <div style={{height:""}}/>
            <div style={{
                backgroundImage: "url('./images/achtergrond.jpg')", backgroundRepeat: "no-repeat",
                backgroundSize: "cover", height: "auto"
            }}>
                <div className="px-4 py-5  text-center">
                    <img className="d-block mx-auto mb-4" src="/images/avatar.jpg" alt=""
                         width="160" height="160"/>
                    <h1 className="display-5 fw-bold">Centered hero</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with
                            Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system, extensive prebuilt components, and
                            powerful JavaScript plugins.</p>
                        <ScrollDownSection/>
                    </div>
                </div>
            </div>
            <div className="divider"/>

            <Skills/>

            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Hanging icons</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#toggles2"></use>
                            </svg>
                        </div>
                        <div>
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="btn btn-primary">
                                Primary button
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#cpu-fill"></use>
                            </svg>
                        </div>
                        <div>
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="btn btn-primary">
                                Primary button
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                            <svg className="bi" width="1em" height="1em">
                                <use xlinkHref="#tools"></use>
                            </svg>
                        </div>
                        <div>
                            <h2>Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with
                                another sentence and probably just keep going until we run out of words.</p>
                            <a href="#" className="btn btn-primary">
                                Primary button
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
);
}