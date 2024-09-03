import { useState } from "react";

const ExperienceSection = () => {
    const [selectedJob, setSelectedJob] = useState<string | null>("Visagio");

    const experiences = [
        {
            company: "Visagio",
            position: "Software Developer Consultant",
            description: [
                "Implemented Angular (Web Framework) and TypeScript to create dynamic and responsive front-end user interfaces, ensuring a seamless and engaging user experience",
                "Leveraged Python, FastAPI, Pandas, and NumPy for back-end development, specializing in efficient data processing and manipulation, contributing to the creation of a robust and scalable web application",
                "Led development of a streamlined staff training needs analysis application, overseeing the design and implementation of the UI/UX and custom database",
            ],
        },
        {
            company: "Pacific Energy Group",
            position: "Data Science Vacation Student",
            description: [
                "Analysed and extracted crucial emissions data from raw dataset for ESG reporting to stakeholders",
                "Utilized Excel and Python for comprehensive data analysis, employing VBA, formula functions, and pivot tables to identify trends in talent recruitment and OSH data",
            ],
        },
    ];

    return (
        <div className="h-screen bg-[#96E6B3] w-full text-black flex flex-row md:justify-center">
            <div className="flex flex-col md:flex-row m-5 md:p-10 md:w-[60rem] space-y-5 md:space-y-0 md:space-x-10">
                <div className="flex flex-col md:w-1/3">
                    <h1 className="font-bold text-xl md:text-3xl mb-10">
                        Experiences
                    </h1>
                    <ul className="list-none space-y-4">
                        {experiences.map((experience, index) => (
                            <li
                                key={index}
                                className="cursor-pointer hover:underline"
                                onClick={() =>
                                    setSelectedJob(experience.company)
                                }
                            >
                                <h2 className="font-bold text-base md:text-lg">
                                    {experience.company}
                                </h2>
                                <p className="font-semibold text-base md:text-lg">
                                    {experience.position}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col md:w-2/3 h-[10rem]">
                    {selectedJob && (
                        <div>
                            {experiences
                                .filter(
                                    (experience) =>
                                        experience.company === selectedJob
                                )
                                .map((experience, index) => (
                                    <div key={index}>
                                        <h2 className="font-bold text-lg md:text-xl">
                                            {experience.company}
                                        </h2>
                                        <p className="font-semibold text-base md:text-lg">
                                            {experience.position}
                                        </p>
                                        <ul className="list-disc ml-5 text-xs md:text-sm space-y-2">
                                            {experience.description.map(
                                                (desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
