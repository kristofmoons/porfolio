import {useEffect, useState} from "react";
import {Skills} from "../components/Skills";
import {MoreInfo} from "../components/MoreInfo";
import { Link } from "react-router-dom";


function ScrollDownSection() {
    function scroll() {
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0, document.body.scrollHeight);
    }

    return (
        <section id="ScrollDown" className="demo mt-5 pt-5 text-center">
        <div className="d-flex justify-content-center">
            <button className="button" onClick={scroll}>
                <span></span>
                Scroll
            </button>
        </div>
    </section>
    );
}

export default function LandingPage() {

    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const [borderColor, setBorderColor] = useState("transparent");
    const [color, setColor] = useState("transparent");


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#212121") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("auto") : setnavSize("8rem");
        window.scrollY > 10 ? setBorderColor("3px solid cornflowerblue") : setBorderColor("0px solid transparent");
        window.scrollY > 10 ? setColor("#fff") : setColor("transparent");


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
     style={{ backgroundColor: navColor, height: navSize, transition: "all 1s", borderBottom: borderColor }}>
    <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: color }}>Kristof Moons</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
            </div>

            <header/>
            <div className="hero">
                <div style={{height:"8rem"}}/>
                <div className="px-4 py-3 my-3 text-center">
                        <h1 className="display-5 fw-bold text-white">Kristof Moons</h1>
                        <div className="col-lg-6 mx-auto my-5">
                            <p className=" mb-4 text-white justify-content-center">Ik ben altijd gemotiveerd om iets nieuws bij te leren.
                                Bij programmeren
                                kan je kennis nooit
                                groot genoeg zijn en is het voor mij een grote uitdaging nieuwe dingen te ontdekken. Dit
                                vind ik dan ook super leuk aan programmeren, dingen creëren. Het ziet er dan super cool
                                uit
                                en geeft een machtig gevoel!</p>
                           <ScrollDownSection/>
                        </div>
                </div>
            </div>

            <div className="divider"/>

            <MoreInfo/>

            <Skills/>

        </>
);
}