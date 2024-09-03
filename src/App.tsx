import "./App.css";
import ContactSection from "./sections/contactSection";
import IntroductionSection from "./sections/introductionSection";
import ProjectSections from "./sections/projectSections";
import SkillsSection from "./sections/skillsSection";

function App() {
    return (
        <>
            <IntroductionSection />
            <SkillsSection />
            <ProjectSections />
            <ContactSection />
        </>
    );
}

export default App;
