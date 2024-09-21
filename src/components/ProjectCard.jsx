import React, { useContext } from "react";
import { GitHubContext } from "../lib/context/GithubContext";

const ProjectCard = () => {
  const { repos, loading } = useContext(GitHubContext);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  return (
    <>
      {repos.map((repo) => (
        <a
        href={repo.html_url}
          
          key={repo.id}
          className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4"
        >
          {/* top */}
          <div className="flex gap-3 items-center justify-between mb-2">
            <span className="font-bold text-lg">{repo.name}</span>
            <span className="text-gray-500">
              {repo.updated_at.split("T")[0]}
            </span>
          </div>
          {/* middle part */}
          <div className="mb-2 text-gray-700">
            {repo.description || "No description available."}
          </div>
          {/* bottom part */}
          <div className="flex items-center justify-between">
            <div className="text-gray-500">{repo.language || "N/A"}</div>
          </div>
        </a>
      ))}
    </>
  );
};

export default ProjectCard;
