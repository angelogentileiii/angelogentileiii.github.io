import ContactFormRecaptcha from "../components/ContactForm";

export const Contact: React.FC = () => {
    // Tie into a small backend to send emails to my email address
    // Package form information into a proper email to be sent with information and message
    // Allow for phone to be optional, make email required and ask for preference of communication >> maybe use state to track
    // If contact preference is a phone number, ensure that a valid phone number is entered

    return (
        <section id="contact" className="section--container">
            <div className="contact--section--content--box">
                <div className="contact--section--content">
                    <h1 className="contact--section--title">
                        <span className="contact--section--title--color">
                            Get In Touch
                        </span>{" "}
                        <br />
                    </h1>
                    <p>
                        Please feel free to reach out for more information or to
                        simply chat? I would love to hear from you!
                    </p>
                    <ContactFormRecaptcha />
                </div>
            </div>
        </section>
    );
};
