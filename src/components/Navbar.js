export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top"
                 style={{backgroundColor: "#212121",  borderBottom: "solid 3px cornflowerblue"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Kristof Moons</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cv">Cv</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{height:"6rem"}}/>


        </>
    );
}