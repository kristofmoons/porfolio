import Navbar from "../components/Navbar";
import Internships from "../components/Internships";
import Projects from "../components/Projects";
import {useState} from "react";

export default function AchievementPage() {

    const [toggle, setToggle] = useState(true)

    return (
        <>
            <Navbar/>
            <div style={{height: "6rem"}}/>

            <div className="container">
                <div className="row align-items-center">

                    <div className="switch-holder px-4">
                        <div className="switch-label">
                            <span>Projecten</span>
                        </div>
                        <div className="switch-toggle">
                            <input type="checkbox" id="bluetooth" onChange={() => setToggle(!toggle)}/>
                            <label htmlFor="bluetooth"/>
                        </div>
                        <div className="switch-label">
                            <span>Ervaringen</span>
                        </div>
                    </div>

                    {toggle ? <Projects/>
                        :
                        <Internships/>
                    }

                </div>
            </div>


        </>
    );
}
