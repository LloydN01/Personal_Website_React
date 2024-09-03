const SkillsSection = () => {
    return (
        <div className="h-screen bg-[#FFF4E4] w-full text-black flex flex-row items-center justify-center">
            <div className="flex flex-col m-5 md:p-10 md:w-[40rem]">
                <h1 className="text-xl md:text-2xl">Some skills of mine...</h1>
                <ul className="list-disc m-5">
                    <li>Python</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>SQL</li>
                    <li>GIT</li>
                </ul>
            </div>
        </div>
    );
};

export default SkillsSection;
