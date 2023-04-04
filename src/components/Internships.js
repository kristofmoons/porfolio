function ImageLeft() {

    return (
        <div className="container py-5">
            <div className="row align-items-center mb-5">
                <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                    <h2 className="font-weight-light">XP DAYS</h2>
                    <p className="font-italic text-muted mb-4">
                        Een project dat ik in team moest maken met 3 andere klasgenoten.
                        de opdracht was een webapplicatie maken voor de studenten van Media en Entertainment Business.
                        hun missie was om een platform te creeëren die vreemdelingen helpt makkelijker in contact te
                        komen met
                        hun buurtbewoners. We hebben gebruikt gemaakt van java spring om de applicatie tot leven te
                        brengen.
                        U kunt de site bezoeken maar het kan zijn dat het even nodig zal hebben om op te starten.
                    </p>


                </div>
                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">

                    <div className="img-fluid mb-4 mb-lg-0">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/projecten/HY/1.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/projecten/HY/3.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/projecten/HY/2.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function ImageRight() {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 mx-auto">

                    <div className="img-fluid mb-4 mb-lg-0">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/projecten/repairaza/1.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/projecten/repairaza/2.png" className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/projecten/repairaza/3.png" className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                    <h2 className="font-weight-light">Repairaza</h2>
                    <p className="font-italic text-muted mb-4">
                        Dit project was om ons aan te leren hoe java spring werkt, we mochten zelf een thema kiezen
                        en moesten dit proberen te realiseren. Omdat men ouders graag naar restaureer programma's op tv
                        kijken had ik besloten om een site te maken waar u uw oude spullen kon brengen om er nieuw leven
                        in te blazen. U kunt de site bezoeken maar het kan zijn dat het even nodig zal hebben om op te
                        starten.
                    </p>

                </div>
            </div>
        </div>
    );
}


export default function Internships(){
    return(<>
            <div className="container">
                <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Ervaringen</h1>
                <hr className="mt-2 mb-5"/>
            </div>

                <ImageLeft/>
                <ImageRight/>


        </>

    );
}