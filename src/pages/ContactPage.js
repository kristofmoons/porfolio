import Navbar from "../components/Navbar";
import {ContactForm, ContactInfo} from "../components/Contact";

export default function ContactPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const subject = "Contact Form Submission";

        window.location.href = `mailto:kristofmoons@hotmail.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Naam: ${firstName} ${lastName}\nEmail: ${email}\nTelefoon: ${phone}\nBericht: ${message}`)}`;
    };

    return (
        <>
            <Navbar />
            <div style={{ height: "6rem" }} />
            <div className="container">
                <div className="border rounded my-3 p-4">
                    <div className="row">
                        <ContactForm handleSubmit={handleSubmit} />
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </>
    );
}