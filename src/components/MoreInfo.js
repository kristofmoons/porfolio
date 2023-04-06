import React from "react";

function Info(props) {
    const handleRedirect = () => {
        window.location.href = props.link;
    };

    return (
        <div className="col-lg d-flex align-items-start border rounded p-3 mx-2">
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    className={"mb-2"}
                    style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                    onClick={handleRedirect}
                >
                    <img
                        src={props.logoSrc}
                        alt={props.title + " logo"}
                        style={{ height: "50px", width: "auto" }}
                    />
                    <h2 style={{ marginLeft: "10px" }}>
                        {props.title}
                    </h2>
                </div>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}


export function MoreInfo() {
    return (
        <div className="container px-4 py-5" id="hanging-icons">
            <h2 className="pb-2 border-bottom">Extra Info</h2>
            <div className="row g-4 pt-3">
                <Info
                    logoSrc={"../images/github.png"}
                    link={"https://github.com/kristofmoons"}
                    title={"Github"}
                    text={
                        "Github is een onmisbaar platform voor mij als ontwikkelaar. " +
                        "Ik gebruik Github om mijn code te delen en samen te werken met andere ontwikkelaars aan projecten, " +
                        "waardoor ik effectiever kan communiceren en werken in teams."
                    }
                />
                <Info
                    logoSrc={"../images/thomasmore.jpg"}
                    link={"https://www.thomasmore.be/opleidingen/graduaat/programmeren-dag-avondonderwijs?gclid=Cj0KCQjw27mhBhC9ARIsAIFsETFtTyVqg0IqSvmMGdQLPu97_YZZiYdgi-rBnCmntQnke6rt7vxxWVMaAmHVEALw_wcB"}
                    title={"studie"}
                    text={
                        "We kregen een stevige basis als full stack developer in Java en Javascript en frameworks zoals React en Java Spring. " +
                        "Daarbij kregen we heel wat ondersteunende vakken zoals databases, netwerken, os, projectmanagement, " +
                        "waardoor we goed voorbereid werden op de praktijk."
                    }
                />
                <Info
                    logoSrc={"../images/linkedinFavi.png"}
                    link={"https://www.linkedin.com/in/kristof-moons/"}
                    title={"LinkedIn"}
                    text={
                        "Ik gebruik LinkedIn als een platform om mijn professionele netwerk te onderhouden en uit te breiden. " +
                        "LinkedIn stelt me in staat om in contact te blijven met collega's, vrienden en potentiële werkgevers, " +
                        "en ik kan mijn professionele prestaties en vaardigheden op een gestructureerde manier tonen"
                    }
                />
            </div>
        </div>
    );
}
