import Navbar from "../components/Navbar";

export default function ContactPage(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const subject = "Contact Form Submission";

        const mailtoLink = `mailto:kristofmoons@hotmail.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Naam: ${firstName} ${lastName}\nEmail: ${email}\nTelefoon: ${phone}\nBericht: ${message}`)}`;

        window.location.href = mailtoLink;
    };

    return (
        <>
            <Navbar />
            <div style={{height:"6rem"}} />
            <div className="container">
                <div className="contact__wrapper shadow-lg mt-n9">
                    <div className="row no-gutters">
                        <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                            <h3 className="color--white mb-5">Contact</h3>
                            <ul className="contact-info__list list-style--none position-relative z-index-101">
                                <li className="mb-4 pl-4">
                                    <span className="position-absolute"><i className="fas fa-envelope"></i></span> kristofmoons@hotmail.be
                                </li>
                                <li className="mb-4 pl-4">
                                    <span className="position-absolute"><i className="fas fa-phone"></i></span> +324 6816 70 53
                                </li>
                                <li className="mb-4 pl-4">
                                    <span className="position-absolute"><i className="fas fa-map-marker-alt"></i></span>
                                    Beekaardstraat 20
                                    <br/> 2570 Duffel
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                            <form onSubmit={handleSubmit} className="contact-form form-validate">
                                <div className="row">
                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field" htmlFor="firstName">Voornaam</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Jean" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Naam</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Dupont" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field" htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="jean@dupont.com" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="phone">Telefoon</label>
                                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="+32 4 123 45 67" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <label className="required-field" htmlFor="message">Bericht</label>
                                            <textarea className="form-control" id="message" name="message" rows="5" placeholder="Typ hier je bericht" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-5">
                                        <button type="submit" className="btn btn-dark">Versturen</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

