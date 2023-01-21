import {useEffect, useState} from "react";
import Navbar from "../components/Navbar";

function ScrollDownSection() {
    function scroll(){
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0, document.body.scrollHeight);
    }
    return (
        <section id="ScrollDown" className="demo">
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
                backgroundSize: "cover" }}>
                <div className="masthead" style={{height:"100vh"}}>
                    <div className="masthead-content text-white">
                        <div style={{width: "100%", marginRight: "auto", marginLeft: "auto",
                            paddingRight: "1.5rem", paddingLeft: "1.5rem"}}>

                            <h1 style={{marginBottom: "1.5rem"}}>text</h1>
                            <p style={{marginBottom: "3rem"}}>We're working hard to finish the development of this site.</p>
                        </div>
                    </div>
                </div>
                <ScrollDownSection/>
            </div>
            </>
    );
}