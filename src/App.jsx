import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import EducationCard from "./components/EducationCard";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";

import { IoMail } from "react-icons/io5";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row   p-4 gap-4 md:gap-8">
      {/* side bar */}
      <div className="flex flex-col gap-3 md:w-1/4">
        <ProfileCard />
        <SkillsCard />
        <EducationCard />
      </div>
      {/* github projects */}
      <div className="flex flex-col gap-4 md:w-3/4 bg-blue-300 rounded-xl p-4">
        <div className="w-full flex justify-between items-center pt-3">
          <div className="">Github Projects</div>
          <div className=" md:flex hidden flex-row gap-4">
            <a href="https://github.com/Yug3ne">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/eugenekoech9/">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:eugenekoech9@gmail.com">
              <IoMail size={24} />
            </a>
            <a href="https://x.com/_Yu_gene__">
              <RiTwitterXFill size={24} />
            </a>
          </div>
          <a href="https://github.com/Yug3ne?tab=repositories">See All</a>
        </div>
        {/* cards */}
        <div className="flex gap-4 items-center w-full flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 w-full">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
