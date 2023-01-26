import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

function ScrollDownSection() {
    function scroll(){
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0, document.body.scrollHeight);
    }
    return (
        <section id="ScrollDown" className="demo mt-5 pt-5">
            <button onClick={scroll}><span/>Scroll</button>
        </section>
    );
}

const UseScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}
export default function LandingPage() {

    return (
        <>
            {  (UseScrollPosition > 20) ?
                <Navbar/>            :
             <Navbar /> }


            <header/>
            <div style={{backgroundImage: "url('./images/achtergrond.jpg')", backgroundRepeat:"no-repeat",
                backgroundSize: "cover", height:"auto" }}>
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
            <div className="b-example-divider"/>

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