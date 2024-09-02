import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Project = ({
    name,
    subHeading,
    role,
    description,
    technologies,
    assets,
}: {
    name: string;
    subHeading: string;
    role: string;
    description: string;
    technologies: string;
    assets: { src: string; alt?: string; type: string }[];
}) => {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const nextSlide = () => {
        setCarouselIndex((carouselIndex + 1) % assets.length);
    };

    const prevSlide = () => {
        setCarouselIndex((carouselIndex - 1 + assets.length) % assets.length);
    };

    return (
        <div className="flex flex-col h-screen mx-auto p-3 md:p-10 md:w-[40rem]">
            <div>
                <h3 className="font-bold text-2xl md:text-3xl">{name}</h3>
                <h5 className="font-bold italic text-lg md:text-xl">
                    {subHeading}
                </h5>
                <h6 className="font-bold text-base md:text-lg">{role}</h6>
                <p className="project-description text-sm md:text-base">
                    {description}
                </p>
                <p className="project-tech text-sm md:text-base">
                    <b>Technologies:</b> {technologies}
                </p>
            </div>
            <div className="flex flex-col flex-grow text-center">
                <div className="project-carousel flex justify-center flex-grow">
                    {assets.map((asset, index) => (
                        <div
                            key={index}
                            className={`w-full h-full flex items-center justify-center ${
                                index === carouselIndex ? "block" : "hidden"
                            }`}
                        >
                            {asset.type === "image" ? (
                                <img
                                    src={asset.src}
                                    alt={asset.alt}
                                    className="rounded-2xl"
                                />
                            ) : (
                                <iframe
                                    src={asset.src}
                                    className="rounded-2xl"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    ))}
                </div>
                <div className="carousel-buttons space-x-10">
                    <button onClick={prevSlide} className="highlight">
                        <FontAwesomeIcon
                            icon={faCaretLeft}
                            className="h-[3rem]"
                        />
                    </button>
                    <button onClick={nextSlide} className="highlight">
                        <FontAwesomeIcon
                            icon={faCaretRight}
                            className="h-[3rem]"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Project;
