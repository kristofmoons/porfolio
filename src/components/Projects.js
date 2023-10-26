function ImageLeftHy() {
    return (
        <div className="border px-4 rounded mx-2 my-3">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">HY</h2>
                        <p className="font-italic text-muted mb-4">
                            Een project dat ik in team moest maken met 3 andere klasgenoten.
                            de opdracht was een webapplicatie maken voor de studenten van Media en Entertainment Business.
                            hun missie was om een platform te creëren die vreemdelingen helpt makkelijker in contact te
                            komen met hun buurtbewoners. We hebben gebruikt gemaakt van Java Spring om de applicatie tot leven te
                            brengen.
                        </p>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                        <div className="img-fluid mb-4 mb-lg-0">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={process.env.PUBLIC_URL + "/images/projecten/HY/1.png"} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={process.env.PUBLIC_URL + "/images/projecten/HY/3.png"} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={process.env.PUBLIC_URL + "/images/projecten/HY/2.png"} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageRightRepairaza() {
    return (
        <div className="border px-4 rounded mx-2 my-3">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-5 px-5 mx-auto">
                        <div className="img-fluid mb-4 mb-lg-0">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={process.env.PUBLIC_URL + "/images/projecten/repairaza/1.png"} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={process.env.PUBLIC_URL + "/images/projecten/repairaza/2.png"} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={process.env.PUBLIC_URL + "/images/projecten/repairaza/3.png"} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">Repairaza</h2>
                        <p className="font-italic text-muted mb-4">
                            Dit project was om ons aan te leren hoe Java Spring werkt, we mochten zelf een thema kiezen
                            en moesten dit proberen te realiseren. Omdat veel mensen graag naar restauratieprogramma's op tv
                            kijken, had ik besloten om een site te maken waar u uw oude spullen kunt brengen om ze nieuw leven
                            in te blazen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageTasteTrail() {
    return (
        <div className="border px-4 rounded mx-2 my-3">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                        <h2 className="font-weight-light">Taste Trail</h2>
                        <p className="font-italic text-muted mb-4">
                            Voor een van mijn laatste schoolprojecten heb ik een receptenapp gemaakt met Flutter,
                            wat mijn eerste ervaring was met deze toolkit. Het was een uitdagend
                            project, maar ook een geweldige kans om nieuwe vaardigheden te leren en uit te breiden.
                            Door deze app te maken, kon ik meer leren over de Flutter-widgets en -lay-outs. Met deze kennis ben ik van plan om meer apps te maken en mijn vaardigheden verder
                            te ontwikkelen. Ik ben erg blij met het resultaat van mijn werk en kan niet wachten om het met anderen te delen.
                        </p>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto ">
                        <img src={process.env.PUBLIC_URL + "/images/projecten/ReceptenApp/cdsds.svg"} className="img-fluid mb-4 mb-lg-0" alt="Project image" />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default function Projects(){
 return(<>
     <div className="container">
         <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Projecten</h1>
         <hr className="mt-2 mb-4"/>
     </div>
<ImageTasteTrail/>
        <ImageLeftHy/>
        <ImageRightRepairaza/>


</>

);
}