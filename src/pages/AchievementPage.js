import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Internships from "../components/Internships";
import Projects from "../components/Projects";
import {CSSTransition, SwitchTransition} from "react-transition-group";


export default function AchievementPage() {
    const [toggle, setToggle] = useState(true);



    return (
        <>
            <Navbar />

            <div style={{ height: "6rem" }} />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="switch-holder px-4">
                            <div className="switch-label">
                                <span>Projecten</span>
                            </div>
                            <div className="switch-toggle">
                                <input
                                    type="checkbox"
                                    id="bluetooth"
                                    checked={!toggle}
                                    onChange={() => setToggle(!toggle)}
                                />
                                <label htmlFor="bluetooth" />
                            </div>
                            <div className="switch-label">
                                <span>Ervaringen</span>
                            </div>
                        </div>

                        <SwitchTransition mode="out-in">
                            <CSSTransition
                                key={toggle ? "projects" : "internships"}
                                classNames="fade"
                                timeout={300}
                            >
                                {toggle ? (
                                    <div className="transition-container">
                                        <Projects />
                                    </div>
                                ) : (
                                    <div className="transition-container">
                                        <Internships />
                                    </div>
                                )}
                            </CSSTransition>
                        </SwitchTransition>

                    </div>
                </div>
            </div>
        </>
    );
}
