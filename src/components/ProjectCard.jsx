import React from "react";

const ProjectCard = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4">
      {/* top */}
      <div className="flex gap-3 items-center justify-between mb-2">
        <span className="font-bold text-lg">Project name</span>
        <span className="text-gray-500">Something</span>
      </div>
      {/* middle part */}
      <div className="mb-2 text-gray-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed inventore,
        corrupti doloribus maxime quae quidem. Pariatur modi adipisci blanditiis
        itaque reprehenderit nulla, id dolorum quas dolor beatae explicabo,
        ipsum quod!
      </div>
      {/* bottom part */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-gray-500">
          <span>stars</span>
          <span>forks</span>
        </div>
        <div className="text-gray-500">Language</div>
      </div>
    </div>
  );
};

export default ProjectCard;
