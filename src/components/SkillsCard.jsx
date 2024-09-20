import React from 'react'

const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    {name: "Tailwindcss", level: "Intermidiate"}
];

const SkillsCard = () => {
    return (
        <div className="flex flex-col shadow-md bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-6">
            {/* top */}
            <div className="flex gap-3 items-center  mb-4">
                <span className="font-bold text-2xl text-white">Tech Stack</span>
            </div>
            {/* middle part */}
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-white p-2 rounded-full shadow-md">
                            <span className="">{skill.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsCard

