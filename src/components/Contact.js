import React from 'react';

export function ContactForm({ handleSubmit }) {
    return (
        <div className="col-lg-6">
            <h2 className="font-weight-light">Contact</h2>
            <p className="text-muted mb-4">
                Heb je vragen of opmerkingen? Neem gerust contact met mij op.
                Vul het onderstaande formulier in, en ik zal zo snel mogelijk reageren.
            </p>
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
    );
}

export function ContactInfo() {
    return (
        <div className="col-lg-6">
            <div className="contact-info__wrapper py-0 px-5">
                <h3 className="mb-4">Mijn Contactgegevens</h3>
                <ul className="contact-info__list list-unstyled">
                    <li className="mb-2">
                        <h4 className="contact-info__title">Email:</h4>
                        <i className="fas fa-envelope"></i> kristofmoons@hotmail.be
                    </li>
                    <li className="mb-2">
                        <h4 className="contact-info__title">Telefoon:</h4>
                        <i className="fas fa-phone"></i> +324 68 16 70 53
                    </li>
                    <li>
                        <h4 className="contact-info__title">Adres:</h4>
                        <i className="fas fa-map-marker-alt"></i>
                        Beekaardstraat 20, 2570 Duffel
                    </li>
                </ul>
            </div>
            <div className="contact-map__wrapper p-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.4358359003697!2d4.477981315733774!3d51.08921767957156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c612eeb7dbad%3A0xfde73b2c0c105f5d!2sBeekaardstraat%2020%2C%202570%20Duffel!5e0!3m2!1sen!2sbe!4v1564399469071!5m2!1sen!2sbe"
                    width="100%"
                    height="250"
                    allowFullScreen=""
                    title="Contact Map"
                ></iframe>
            </div>
        </div>
    );
}
