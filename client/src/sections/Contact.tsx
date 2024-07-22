import {
    ContactFormRecaptcha,
    SocialMediaLinks,
} from "../components/index.components";

export const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="block mx-auto justify-start items-center min-h-screen h-auto min-w-[320px] p-4"
        >
            <div className="text-3xl font-bold pt-16 lg:pt-28 dynamic-padding">
                <h3>&mdash; Let's Connect!</h3>
            </div>
            <div className="block justify-center items-center w-full mb-10 pt-10 pb-4">
                <div className="mx-auto gap-8 md:max-w-[750px] min-w-[320px] mb-4 text-center">
                    <div className="w-full mx-auto mb-4">
                        <span className="text-lg text-center">
                            Please feel free to reach out with any questions, I
                            would love to hear from you!
                        </span>
                    </div>
                    <ContactFormRecaptcha />
                </div>

                <div className="my-4 mx-auto sm:max-w-[750px] min-w-[320px] mb-4 w-full bg-white rounded-lg shadow-md p-4">
                    <SocialMediaLinks />
                </div>
                <div className="mx-auto sm:max-w-[750px] min-w-[320px] justify-center text-center">
                    <small className="text-[.6rem] text-gray-700">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            className="text-amber-600"
                        >
                            Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://policies.google.com/terms"
                            className="text-amber-600"
                        >
                            Terms of Service
                        </a>{" "}
                        apply.
                    </small>
                </div>
            </div>
        </section>
    );
};
