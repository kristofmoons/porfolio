import Navbar from "../components/Navbar";
import {Internships} from "../components/Internships";
import Projects from "../components/Projects";
import {useState} from "react";

export default function AchievementPage() {

    const [toggle, setToggle] = useState(true)

return (
    <>
        <Navbar/>

        <div className="switch-holder">
            <div className="switch-label">
                <span>Bluetooth</span>
            </div>
            <div className="switch-toggle">
                <input type="checkbox" id="bluetooth"  onChange={() => setToggle(!toggle)}/>
                    <label htmlFor="bluetooth"/>
            </div>
            <div className="switch-label">
                <span>Bluetooth</span>
            </div>
        </div>

        {toggle? <Projects/>
            :
        <Internships/>
        }

    </>
);
}
