import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex flex-col shadow-md bg-blue-300 rounded-lg p-4">
      {/* top */}
      <div className="flex gap-3 items-center justify-center mb-2">
        <span className="font-bold text-lg">Github Profile</span>
      </div>
      {/* middle part */}
      <div className="flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover flex items-center justify-center "
        />
      </div>

      {/* bottom part */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-2 text-gray-500">
          <span>Quote</span>
         
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
