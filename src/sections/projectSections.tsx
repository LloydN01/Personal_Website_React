import Project from "../components/project";

// Import images
import ChatBotGIF from "../images/Chat-Bot-GIF.gif";
import ChatDemoGIF from "../images/chat-demo.gif";
import SummariseAIDemoGIF from "../images/Summarise-AI-Demo.gif";
import TroveDemoGIF from "../images/Trove-Demo-GIF.gif";

const projectContent = [
    {
        id: "project1",
        name: "GetHired.ai",
        subHeading: "Interview Practice Chat-Bot",
        role: "Co-Creator",
        description:
            "GPT powered interview practice chat application that allows users to practice their interview skills with an AI bot. Users can enter their desired job title and the bot will generate and ask interview questions related to the job. Users will be able to get instant feedback on their answers and improve their interview skills.",
        technologies:
            "HTML, CSS, JavaScript, Python, Flask, OpenAI GPT-3.5, Jquery, Bootstrap",
        assets: [
            {
                src: ChatBotGIF,
                alt: "Chat-Bot-GIF",
                type: "image",
            },
            { src: ChatDemoGIF, alt: "chat-demo", type: "image" },
            { src: "https://www.youtube.com/embed/NKSRK7ZsTR0", type: "video" },
            { src: "https://www.youtube.com/embed/ivmjqKBeae0", type: "video" },
            { src: "https://www.youtube.com/embed/F3HklcJXReY", type: "video" },
            { src: "https://www.youtube.com/embed/0351ANuEWKk", type: "video" },
        ],
    },
    {
        id: "project2",
        name: "Summarise AI",
        subHeading:
            "A browser extension that summarises user selected text on any webpage",
        role: "Creator",
        description:
            "A browser extension that leverages NLPCloud's API to summarise user selected text on any webpage. It applies DOM manipulation to extract the selected text and sends it to the API for summarisation. The summarised text is then displayed to the user. Enabled customization by integrating the functionality to choose from different NLP models for text summarization.",
        technologies:
            "HTML, CSS, JavaScript, API Integration, NLP, DOM Manipulation",
        assets: [
            {
                src: SummariseAIDemoGIF,
                alt: "SummariseAI-Demo-GIF",
                type: "image",
            },
            {
                src: "https://www.youtube.com/embed/CtGkt3FdrsQ?si=KH34eemRIXXA65Fi",
                type: "video",
            },
        ],
    },
    {
        id: "project3",
        name: "Spotlight for Linux",
        subHeading: "A spotlight-like command-line utility program",
        role: "Co-Creator",
        description:
            "A command-line utility program, named trove, that builds and searches a compressed index of the content of the files in a user specified directory. Allows the user to search for keywords and pinpoint the location of the files that contain them.",
        technologies: "C, Unix, Makefile, POSIX function calls, System Calls",
        assets: [
            {
                src: TroveDemoGIF,
                alt: "Trove-Demo-GIF",
                type: "image",
            },
            { src: "https://www.youtube.com/embed/vN1lATWz7d4", type: "video" },
            { src: "https://www.youtube.com/embed/kv_1715QZ2I", type: "video" },
        ],
    },
];

const ProjectSections = () => {
    const colours: string[] = ["#7B2CBF", "#5A189A", "#3C096C "];

    return (
        <div className="w-full flex flex-col">
            <div className="bg-[#9D4EDD] h-screen flex md:justify-center items-center">
                <div className="md:p-10 md:w-[40rem] m-5">
                    <h1 className="font-bold text-xl md:text-3xl">Projects</h1>
                    <p className="font-bold italic text-xs md:text-sm">
                        A list of projects I have worked on, starting with this
                        website!
                    </p>
                    <p className=" text-xs md:text-sm mt-10">
                        This website was built using React + TypeScript +
                        Tailwind.
                    </p>
                </div>
            </div>
            {projectContent.map((project, index) => (
                <div
                    key={project.id}
                    style={{
                        backgroundColor: colours[index],
                        borderColor: colours[index],
                    }}
                >
                    <Project
                        name={project.name}
                        subHeading={project.subHeading}
                        role={project.role}
                        description={project.description}
                        technologies={project.technologies}
                        assets={project.assets}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectSections;
