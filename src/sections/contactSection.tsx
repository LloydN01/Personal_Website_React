import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
    return (
        <div className="h-screen bg-[#58355E] w-full text-white flex flex-row items-center md:justify-center">
            <div className="flex flex-col m-5 md:p-10 md:w-[40rem]">
                <h1 className="font-bold text-xl md:text-3xl">Contact Me</h1>
                <ul className="list-none my-5 text-xs md:text-sm">
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        lloydna0527@gmail.com
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lloyd-na/">
                            <FontAwesomeIcon icon={faLinkedin} />
                            linkedin.com/in/lloyd-na/
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/LloydN01">
                            <FontAwesomeIcon icon={faGithub} />
                            github.com/LloydN01
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactSection;
