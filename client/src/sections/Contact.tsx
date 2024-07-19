import { ContactFormRecaptcha } from "../components/index.components";

export const Contact: React.FC = () => {
    // Tie into a small backend to send emails to my email address
    // Package form information into a proper email to be sent with information and message
    // Allow for phone to be optional, make email required and ask for preference of communication >> maybe use state to track
    // If contact preference is a phone number, ensure that a valid phone number is entered

    return (
        <section
            id="contact"
            className="block justify-start items-center min-h-screen h-auto bg-slate-200 min-w-[320px] p-4"
        >
            <div className="text-3xl font-bold pt-16 lg:pt-28 dynamic-padding">
                <span>&mdash; Let's connect!</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full lg:mb-36 bg-slate-200 pt-16 pb-4 px-4">
                <div className="mx-auto lg:w-1/2 mb-8 lg:mb-0 text-center">
                    <div className="w-full lg:w-[70%] mx-auto mb-4">
                        <span className="block text-lg text-center">
                            Feel free to reach out with any questions/concerns
                            or simply to chat,
                            <br />I would love to hear from you!
                        </span>
                    </div>
                    <ContactFormRecaptcha />
                </div>

                <div className="mx-auto lg:w-1/2 bg-white rounded-lg shadow-md p-4">
                    <div className="flex justify-around items-center">
                        <a
                            href="#"
                            className="text-3xl text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            <i className="fab fa-linkedin">LinkedIn</i>
                        </a>
                        <a
                            href="#"
                            className="text-3xl text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            <i className="fab fa-github">Github</i>
                        </a>
                        <a
                            href="#"
                            className="text-3xl text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            <i className="fab fa-medium">Medium</i>
                        </a>
                        <a
                            href="#"
                            className="text-3xl text-gray-700 hover:text-blue-500 transition-colors duration-300"
                        >
                            <i className="fab fa-medium">X</i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
