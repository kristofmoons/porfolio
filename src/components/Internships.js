function ImageLeft() {
    return (
        <div className="border px-4 rounded mx-2">
        <div className="container pt-4">
            <div className="row align-items-center mb-3">
                <div className="col-lg-6 order-2 order-lg-1 overflow-auto">
                    <h2 className="font-weight-light">Stage bij XP DAYS</h2>
                    <p className="font-italic text-muted mb-4 overflow-auto" style={{ maxHeight: '400px' }}>
                        Met trots kan ik vertellen dat ik samen met twee andere studenten een applicatie heb herschreven met React en Firebase als backend. Het betreft een app die de organisatie helpt bij het organiseren van conferenties.<br/><br/>
                        Het was een uitdagend project, maar we hebben ons er volledig op gestort en met succes voltooid. De oude applicatie was niet meer toereikend voor de behoeften van de organisatie en miste essentiële functies. Door het gebruik van React hebben we een moderne en responsieve gebruikersinterface kunnen creëren die aantrekkelijker en gebruiksvriendelijker is dan de vorige versie.<br/><br/>
                        We hebben ook Firebase gebruikt als backend voor de app, wat ons veel flexibiliteit en schaalbaarheid gaf. Met behulp van Firebase hebben we functies als real-time updates, authenticatie en databasebeheer kunnen integreren in de app.<br/><br/>
                        Het was een waardevolle ervaring om met andere studenten samen te werken aan een project van deze omvang. We hebben veel geleerd over teamwork, software-ontwikkeling en het belang van goed projectmanagement. Ik ben trots op wat we hebben bereikt en ik kijk ernaar uit om mijn nieuwe kennis en vaardigheden in toekomstige projecten toe te passen.
                    </p>
                </div>
                <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                    <img src="/images/experiences/Xpdays.jpg" className="img-fluid mb-4 mb-lg-0" alt="Project image" />
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


export default function Internships() {
    return (<>
            <div className="container">
                <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Ervaringen</h1>
                <hr className="mt-2 mb-5"/>
            </div>

            <ImageLeft/>
            {/*<ImageRight/>*/}


        </>

    );
}