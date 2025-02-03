import React from "react";

function Info(props) {
  const handleRedirect = () => {
    window.location.href = props.link;
  };

  return (
    <div className="col-lg-4 mb-4">
      <div className="card h-100">
        <div
          className="card-header d-flex align-items-center cursor-pointer"
          onClick={handleRedirect}
        >
          <img
            src={process.env.PUBLIC_URL + props.logoSrc}
            alt={props.title + " logo"}
            style={{ height: "50px", width: "auto" }}
          />
          <h2 className="ms-3 mb-0">{props.title}</h2>
        </div>
        <div className="card-body d-flex flex-column">
          <p className="flex-grow-1">{props.text}</p>
          <button className="button-visit" onClick={handleRedirect}>
            Bezoek me
          </button>
        </div>
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
          logoSrc={"/images/github.png"}
          link={"https://github.com/kristofmoons"}
          title={"Github"}
          text={
            "Github is voor mij van onschatbare waarde om mijn code veilig te bewaren. " +
            "Door gebruik te maken van Github vermijd ik het verlies van code en profiteer ik van versiebeheer en handig issue-management, wat het tot een essentieel onderdeel maakt van mijn ontwikkelworkflow."
          }
        />
        <Info
          logoSrc={"/images/thomasmore.jpg"}
          link={
            "https://thomasmore.be/nl/opleidingen/graduaat/programmeren/sint-katelijne-waver/basistraject"
          }
          title={"studie"}
          text={
            "We kregen een stevige basis als full stack developer in Java en Javascript en frameworks zoals React en Java Spring. " +
            "Daarbij kregen we heel wat ondersteunende vakken zoals databases, netwerken, os, projectmanagement, " +
            "waardoor we goed voorbereid werden op de praktijk."
          }
        />
        <Info
          logoSrc={"/images/linkedinFavi.png"}
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
