function ImageRight() {
    return (
        <div className="border px-4 rounded mx-2 my-3">
            <div className="container py-1">
                <div className="row align-items-center mb-3">
                    <div className="col-lg-6 order-2 order-lg-1 overflow-auto">
                        <h2 className="font-weight-light">Stage bij XP DAYS</h2>
                        <p className="font-italic text-muted overflow-auto" style={{maxHeight: '400px'}}>
                            Met trots heb ik samengewerkt met twee andere studenten om een
                            conferentieorganisatie-applicatie te herschrijven met behulp van React en Firebase als
                            backend. We hebben met succes de oude applicatie vervangen, die niet voldeed aan de
                            behoeften van de organisatie en essentiële functies miste. Met React hebben we een moderne
                            en responsieve gebruikersinterface gecreëerd, die aantrekkelijker en gebruiksvriendelijker
                            is dan voorheen. Met Firebase als backend hebben we flexibiliteit en schaalbaarheid
                            toegevoegd, inclusief real-time updates, authenticatie en databasebeheer. Deze samenwerking
                            heeft ons waardevolle ervaring opgeleverd in teamwork, software-ontwikkeling en
                            projectmanagement. Ik ben trots op wat we hebben bereikt en ik kijk ernaar uit om mijn
                            nieuwe kennis en vaardigheden in toekomstige projecten toe te passen.
                        </p>
                    </div>
                    <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                    <img src={process.env.PUBLIC_URL + "/images/experiences/Xpdays.jpg"} className="img-fluid mb-4 mb-lg-0"
                             alt="Project image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ImageLeft() {
    return (
        <div className="border px-4 rounded mx-2 my-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 px-5 mx-auto">
                    <img src={process.env.PUBLIC_URL + "/images/experiences/peopleware.png"} className="img-fluid mb-4 mb-lg-0" alt="Project image" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="font-weight-light">Stage bij PeopleWare</h2>
                        <p className="font-italic text-muted">
                            Ik heb meegewerkt aan het project "PPW Applicants" waarbij we hebben gewerkt aan het vervangen van het gebruik van Google Spreadsheets en Google Drive door een nieuwe applicatie. Dit project heb ik samen met een klasgenoot uitgevoerd, waarbij onze mentor onze code heeft gereviewd. Het was een uitdaging voor mij omdat ik uit mijn comfortzone moest stappen en werken met C#. Ik was voornamelijk bezig met de backend. Deze ervaring heeft mijn vaardigheden verrijkt en waardevolle ervaring opgeleverd voor mijn portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Internships() {
    return (
        <div className="container">
            <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">Ervaringen</h1>
            <hr className="mt-2 mb-4" />
            <ImageLeft />
            <ImageRight />
        </div>
    );
}
