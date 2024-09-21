import React, { useContext } from "react";
// import { GitHubContext } from "../lib/context/GithubContext";

const ProfileCard = () => {
  // const { profile, loading } = useContext(GitHubContext);
  return (
    <>
      <div className="flex flex-col shadow-md bg-blue-300 rounded-lg p-4">
        {/* top */}
        <div className="flex gap-3 items-center justify-center mb-2">
          <span className="font-bold text-lg">Yug3ne</span>
        </div>
        {/* middle part */}
        <div className="flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFviPZjasJPNw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725354375736?e=1732147200&v=beta&t=ptpxdCztJksYhqUsc0Pb6jEkdycvg6aKDmunvHeMAmE"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover flex items-center justify-center "
          />
        </div>

        {/* bottom part */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-2 text-gray-500">
            <span>Software Engineer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
